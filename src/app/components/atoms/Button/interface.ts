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
