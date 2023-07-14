import React from 'react';

import {
  Container,
  ContentContainer,
  IconContainer,
  ImageContainer,
} from '@/app/components/atoms/Button/styled';
import Icon from '@/app/components/atoms/Icon';
import { theme } from '@/app/components/modules/ThemeProvider/theme';
import { TButton } from '@/app/types/common';

const Button = (props: TButton): React.ReactElement => {
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
    onClick,
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
      isActive={isActive}
      onClick={onClick}
    >
      {image && (
        <ImageContainer isActive={isActive} src={image} alt={image} width={43} height={43} />
      )}
      {icon && (
        <IconContainer size={size}>
          {<Icon size={Number(size)} name={icon} color={theme.colors.black} />}
        </IconContainer>
      )}
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

Button.displayName = 'Button';

export default Button;
