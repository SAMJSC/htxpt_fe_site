import { InputHTMLAttributes } from 'react';

import { ICONS } from '@/app/components/atoms/Icon';

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

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: keyof typeof ICONS;
  image?: string;
  size: ButtonSize;
  variant: ButtonVariant;
  fullWidth?: boolean;
  borderRadius?: ButtonRadius;
  shadow?: boolean;
  isActive?: boolean;
};

export type InputType = 'text' | 'password' | 'number' | 'email' | 'tel';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  // errors?: FieldErrors<FieldValues>;
  errors?: boolean;
  icon?: keyof typeof ICONS;
  showIcon?: keyof typeof ICONS;
};
