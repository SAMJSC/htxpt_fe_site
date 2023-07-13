import React from 'react';

import {
  Container,
  ContentContainer,
  IconContainer,
  ImageContainer,
} from '@/app/components/atoms/Button/styled';
import Icon from '@/app/components/atoms/Icon';
import { theme } from '@/app/components/modules/ThemeProvider/theme';
import { ButtonProps } from '@/app/types/common';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    icon,
    image,
    children,
    size,
    variant,
    fullWidth,
    shadow,
    isActive,
    borderRadius,
    ...otherProps
  } = props;

  return (
    <Container
      {...otherProps}
      size={size}
      variant={variant}
      borderRadius={borderRadius}
      fullWidth={fullWidth}
      shadow={shadow}
      ref={ref}
      isActive={isActive}
    >
      {image && (
        <ImageContainer isActive={isActive} src={image} alt={image} width={43} height={43} />
      )}
      {icon && (
        <IconContainer size={size}>{<Icon name={icon} color={theme.colors.black} />}</IconContainer>
      )}
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
});

Button.displayName = 'Button';

export default Button;
