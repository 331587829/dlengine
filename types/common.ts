export interface Language {
  code: 'zh' | 'en';
  name: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
  },
];

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}