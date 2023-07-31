import { InputHTMLAttributes } from 'react';

import { ICONS } from '@/app/components/atoms/Icon';
import { GardenerDetailTabCode } from '@/app/constants/common';

export type TabBase = {
  code: GardenerDetailTabCode;
  label: string | number;
  subLabel?: string | number;
};

export type TestReturn = {
  data: {
    message: string;
    success: boolean;
  };
};

export type MutationTestResponse = {
  message: string;
  success: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export type MutationArg = {
  email: string;
  password: string;
};

export type ButtonVariant = 'contained' | 'outlined' | 'text' | 'icon' | 'image';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonRadius = 'none' | 'normal' | 'full';
export type InputType = 'text' | 'password' | 'number' | 'email' | 'tel';
export type LabelSide = 'left' | 'right';

export type TButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: keyof typeof ICONS;
  image?: string;
  size: ButtonSize;
  variant: ButtonVariant;
  fullWidth?: boolean;
  borderRadius?: ButtonRadius;
  shadow?: boolean;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type TInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  // errors?: FieldErrors<FieldValues>;
  errors?: boolean;
  icon?: keyof typeof ICONS;
  showIcon?: keyof typeof ICONS;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>;
  value?: string;
  isShowPassword?: boolean;
  onIconClick?: React.MouseEventHandler<HTMLElement>;
};

export type TCheckBox = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  labelSide: LabelSide;
};

export type TIcon = {
  name: keyof typeof ICONS;
  size?: number;
  color?: string;
};

export type TCheckbox = InputHTMLAttributes<HTMLInputElement> & {
  size?: number;
  label?: string;
  labelAlignment?: LabelSide;
  checked?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export type Action = {
  id: string;
  label: string;
  handler: () => void;
};

export const GARDENER_TEXT = 'Nhà vườn';

export const STATUS_TEXT = 'Tình trạng';

export const GARDENER_CATEGORIES = {
  GARDENERS: 'Nhà vườn',
  FAVORITES: 'Yêu thích',
} as const;

export type GardenerCategoriesCode = keyof typeof GARDENER_CATEGORIES;

export type GardenerButtonCategories = {
  code: GardenerCategoriesCode;
  label: string;
};

export const PRODUCT_TYPE = {
  FRUITS: 'Quả',
  TREES: 'Cây',
} as const;

export type ProductTypeCode = keyof typeof PRODUCT_TYPE;

export type ProductsTypeButton = {
  code: ProductTypeCode;
  label: string;
};

export const FRUITS_TYPE = {
  'TYPE-1': 'Loại 1',
  'TYPE-2': 'Loại 2',
  'TYPE-3': 'Loại 3',
  'TYPE-4': 'Loại 4',
  'TYPE-5': 'Loại 5',
  'TYPE-6': 'Loại 6',
  SPECIAL: 'Loại đặc biệt',
} as const;

export type FruitTypesCode = keyof typeof FRUITS_TYPE;

export type FruitsCheckBoxType = {
  code: FruitTypesCode;
  label: string;
};
