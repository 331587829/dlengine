// 多语言配置常量
export const LOCALE_CONFIG = {
  // 支持的语言列表
  locales: ['zh', 'en'] as const,
  
  // 默认语言
  defaultLocale: 'zh' as const,
  
  // 语言路径前缀配置
  pathPrefixes: {
    zh: '',      // 中文无前缀
    en: '/en'    // 英文带 /en 前缀
  },
  
  // GraphQL 查询语言参数
  graphqlLanguages: {
    zh: 'ZH',
    en: 'EN'
  },
  
  // 语言名称（用于显示）
  languageNames: {
    zh: { name: 'Chinese', nativeName: '中文' },
    en: { name: 'English', nativeName: 'English' }
  }
} as const;

// 获取语言对应的路径前缀
export function getPathPrefix(locale: string): string {
  return LOCALE_CONFIG.pathPrefixes[locale as keyof typeof LOCALE_CONFIG.pathPrefixes] || '';
}

// 获取语言对应的 GraphQL 语言参数
export function getGraphQLLanguage(locale: string): string {
  return LOCALE_CONFIG.graphqlLanguages[locale as keyof typeof LOCALE_CONFIG.graphqlLanguages] || 'ZH';
}

// 检查路径是否包含语言前缀
export function pathHasLocalePrefix(pathname: string): boolean {
  return LOCALE_CONFIG.locales.some(
    (locale) => {
      const prefix = LOCALE_CONFIG.pathPrefixes[locale];
      if (!prefix) {
        return false;
      }
      return pathname === prefix || pathname.startsWith(`${prefix}/`);
    }
  );
}

// 从路径中提取语言代码
export function extractLocaleFromPath(pathname: string): string {
  for (const locale of LOCALE_CONFIG.locales) {
    const prefix = LOCALE_CONFIG.pathPrefixes[locale];
    if (prefix && pathname.startsWith(prefix)) {
      return locale;
    }
  }
  return LOCALE_CONFIG.defaultLocale;
}
