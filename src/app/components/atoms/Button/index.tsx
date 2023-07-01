import React from 'react';

import { ButtonProps } from '@/app/components/atoms/Button/interface';
import { Container, Icon } from '@/app/components/atoms/Button/styled';

const Button = ({
  children,
  disabled,
  fullWidth,
  leftIcon,
  onClick,
  rightIcon,
  size = 'md',
  variant = 'contained',
}: ButtonProps): React.ReactElement => {
  return (
    <Container
      onClick={onClick}
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {leftIcon && <Icon>{leftIcon}</Icon>}
      {children}
      {rightIcon && <Icon>{rightIcon}</Icon>}
    </Container>
  );
};

export default Button;
