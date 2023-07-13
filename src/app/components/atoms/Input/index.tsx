import React, { useState } from 'react';

import Icon from '@/app/components/atoms/Icon';
import {
  Container,
  ErrorMessage,
  IconContainer,
  InputContainer,
  InputField,
  InputLabel,
} from '@/app/components/atoms/Input/styled';
import { theme } from '@/app/components/modules/ThemeProvider/theme';
import { InputProps } from '@/app/types/common';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [value, setValue] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { id, label, type, errors, icon, showIcon } = props;

  const handleOnType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleIconClicked = () => {
    if (showIcon) {
      setIsShowPassword(!isShowPassword);
    }
  };

  return (
    <Container>
      <InputContainer>
        <InputField
          type={showIcon ? (isShowPassword ? type : 'password') : type}
          onChange={handleOnType}
          hasValue={value.length > 0}
          errors={errors}
          icon={icon}
          autoCapitalize="off"
          spellCheck={false}
          autoComplete="off"
          ref={ref}
          id={id}
        />
        <IconContainer onClick={handleIconClicked}>
          {showIcon && !isShowPassword ? (
            <Icon
              name={showIcon}
              color={errors ? theme.colors.error : theme.colors.darkGrey}
              size={24}
            />
          ) : (
            icon && (
              <Icon
                name={icon}
                color={errors ? theme.colors.error : theme.colors.darkGrey}
                size={24}
              />
            )
          )}
        </IconContainer>

        <InputLabel errors={errors} htmlFor={id}>
          {label}
        </InputLabel>
      </InputContainer>
      {errors && (
        <ErrorMessage>
          <Icon name="ic_field_error" color={theme.colors.darkGrey} size={16} />
          Số điện thoại chưa đăng ký
        </ErrorMessage>
      )}
    </Container>
  );
});

Input.displayName = 'Input';

export default Input;
