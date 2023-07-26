export const ABOUT_CATEGORIES_CODE = {
  US: 'Về Hợp Tác Xã',
  HISTORY: 'Lịch sử',
  STRATEGY: 'Chiến lược',
  SYSTEM: 'Hệ thống',
  'HUMAN-RESOURCES': 'Nhân sự',
  COMMIT: 'Cam kết',
} as const;

export type AboutCategoriesCode = keyof typeof ABOUT_CATEGORIES_CODE;

export type AboutCategories = {
  code: AboutCategoriesCode;
  image: string;
  label: string;
};

export type CoreValueContentItem = {
  image: string;
  title: string;
  content: string;
};
