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
import { TInput } from '@/app/types/common';

const Input = (props: TInput) => {
  const { id, label, type, errors, icon, showIcon, onChange, isShowPassword, value, onIconClick } =
    props;

  return (
    <Container>
      <InputContainer>
        <InputField
          type={showIcon ? (isShowPassword ? type : 'password') : type}
          onChange={onChange}
          value={value}
          errors={errors}
          icon={icon}
          autoCapitalize="off"
          spellCheck={false}
          autoComplete="off"
          id={id}
        />
        <IconContainer onClick={onIconClick}>
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
};

Input.displayName = 'Input';

export default Input;
