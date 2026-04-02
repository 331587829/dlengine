'use client';

import { useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';

let historyPatched = false;
const listeners = new Set<() => void>();

function getBrowserPathname() {
  if (typeof window === 'undefined') {
    return '/';
  }
  return window.location.pathname;
}

function notifyPathnameChange() {
  // 使用requestAnimationFrame避免在React渲染周期内同步调用
  requestAnimationFrame(() => {
    listeners.forEach((listener) => listener());
  });
}

function ensureHistoryPatched() {
  if (historyPatched || typeof window === 'undefined') {
    return;
  }

  historyPatched = true;
  const originalPushState = window.history.pushState;
  const originalReplaceState = window.history.replaceState;

  window.history.pushState = function (...args) {
    originalPushState.apply(window.history, args);
    notifyPathnameChange();
  };

  window.history.replaceState = function (...args) {
    originalReplaceState.apply(window.history, args);
    notifyPathnameChange();
  };

  window.addEventListener('popstate', notifyPathnameChange);
}

function subscribePathname(listener: () => void) {
  listeners.add(listener);
  ensureHistoryPatched();
  return () => {
    listeners.delete(listener);
  };
}

export function useLocale() {
  const routerPathname = usePathname() || '/';
  const browserPathname = useSyncExternalStore(
    subscribePathname,
    getBrowserPathname,
    () => routerPathname
  );
  const resolvedPathname = browserPathname || routerPathname;
  const isEnglish = resolvedPathname.startsWith('/en');
  const locale = isEnglish ? 'en' : 'zh';

  return {
    pathname: resolvedPathname,
    locale,
    isEnglish,
  };
}
