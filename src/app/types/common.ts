import { FieldValues, UseFormRegister } from 'react-hook-form';

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

export type ButtonVariant = 'contained' | 'outlined' | 'text';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export type ButtonProps = {
  fullWidth?: boolean;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
};

export type InputType = 'text' | 'password' | 'number' | 'email' | 'tel';

export type InputProps = {
  id: string;
  label?: string;
  type: InputType;
  required: boolean;
  register?: UseFormRegister<FieldValues>;
  errors?: boolean;
  // errors?: FieldErrors<FieldValues>;
  disable: boolean;
  icon?: React.ReactNode;
  showIcon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
