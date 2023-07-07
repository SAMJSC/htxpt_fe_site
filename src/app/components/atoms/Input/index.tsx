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

const Input = ({
  id,
  type,
  label,
  required,
  disable,
  icon,
  showIcon,
  errors,
}: InputProps): React.ReactElement => {
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleOnType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleIconClicked = () => {
    if (showIcon) {
      setShowPassword(!showPassword);
    }
  };

  return (
    <Container>
      <InputContainer>
        <InputField
          type={!showPassword ? type : 'password'}
          id={id}
          disabled={disable}
          required={required}
          onChange={handleOnType}
          hasValue={value.length > 0}
          errors={errors}
          icon={icon}
          autoCapitalize="off"
          spellCheck={false}
        />
        {showPassword ? (
          <IconContainer onClick={handleIconClicked}>{showIcon}</IconContainer>
        ) : (
          <IconContainer onClick={handleIconClicked}>{icon}</IconContainer>
        )}
        <InputLabel errors={errors} htmlFor={id}>
          {label}
        </InputLabel>
      </InputContainer>
      {errors && (
        <ErrorMessage>
          <Icon name="ic_field_error" color={theme.colors.darkGrey} size={16} />
          {/* {errors.message} */}
          Số điện thoại chưa đăng ký
        </ErrorMessage>
      )}
    </Container>
  );
};

export default Input;
