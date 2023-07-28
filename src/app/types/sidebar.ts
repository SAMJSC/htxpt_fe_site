import { ICONS } from '@/app/components/atoms/Icon';

export const SIDEBAR_ITEM = {
  HOME: 'Trang chủ',
  ABOUT: 'Giới thiệu',
  'FRUIT-INFORMATION': 'Quả phật thủ',
  GARDENERS: 'Nhà vườn',
  PRODUCTS: 'Danh mục sản phẩm',
  BLOG: 'Tin tức & Sự kiện',
} as const;
export type SideBarItemCode = keyof typeof SIDEBAR_ITEM;

export type SideBarItems = {
  code: string;
  icon: keyof typeof ICONS;
  name: string;
};
