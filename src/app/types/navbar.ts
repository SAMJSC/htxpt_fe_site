import { ICONS } from '@/app/components/atoms/Icon';

export const NAVBAR_ITEM = {
  HOME: 'Trang chủ',
  ABOUT: 'Giới thiệu',
  FRUITS: 'Quả phật thủ',
  GARDENERS: 'Nhà vườn',
  PRODUCTS: 'Sản phẩm',
  BLOG: 'Tin tức & Sự kiện',
} as const;
export type NavBarItemCode = keyof typeof NAVBAR_ITEM;

export type NavbarItems = {
  code: string;
  icon: keyof typeof ICONS;
  name: string;
};
