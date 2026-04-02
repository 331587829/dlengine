import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { LOCALE_CONFIG, extractLocaleFromPath, getPathPrefix, pathHasLocalePrefix } from '@/lib/i18n/config';

const LOCALE_COOKIE_NAME = 'dl_locale';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocalePrefix = pathHasLocalePrefix(pathname);
  const localeCookie = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  const isRscRequest = request.headers.has('rsc');
  const secFetchDest = request.headers.get('sec-fetch-dest');
  const isDocumentLikeRequest = !isRscRequest && secFetchDest !== 'empty';

  if (!hasLocalePrefix && !localeCookie && isDocumentLikeRequest) {
    const acceptLanguage = request.headers.get('accept-language') || '';
    const preferredLocale = getPreferredLocale(acceptLanguage);

    if (preferredLocale === 'en') {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = `${getPathPrefix('en')}${pathname}`;
      const response = NextResponse.redirect(redirectUrl);
      response.cookies.set(LOCALE_COOKIE_NAME, 'en', {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
      });
      return response;
    }
  }

  const response = NextResponse.next();
  const locale = hasLocalePrefix ? extractLocaleFromPath(pathname) : LOCALE_CONFIG.defaultLocale;
  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });
  return response;
}

function getPreferredLocale(acceptLanguage: string): string {
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [locale, quality = '1'] = lang.trim().split(';');
      return {
        locale: locale.split('-')[0],
        quality: parseFloat(quality.replace('q=', '')),
      };
    })
    .filter((lang) => lang.locale);

  languages.sort((a, b) => b.quality - a.quality);

  for (const lang of languages) {
    if (LOCALE_CONFIG.locales.includes(lang.locale as any)) {
      return lang.locale;
    }
  }

  return LOCALE_CONFIG.defaultLocale;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
