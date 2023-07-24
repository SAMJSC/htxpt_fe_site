import React, { InputHTMLAttributes } from 'react';

import Icon from '@/app/components/atoms/Icon';
import { Container, InputContainer } from '@/app/components/atoms/SearchInput/styled';
import { theme } from '@/app/components/modules/ThemeProvider/theme';
import { INPUT_PLACEHOLDER } from '@/app/constants/header';

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>;
};

const SearchInput = ({ value, onChange }: SearchInputProps): React.ReactElement => {
  return (
    <Container>
      <Icon name="ic_search_outline" color={theme.colors.darkGrey} size={24} />
      <InputContainer
        placeholder={INPUT_PLACEHOLDER}
        value={value}
        onChange={onChange}
        type="text"
        autoCapitalize="off"
        spellCheck={false}
        autoComplete="off"
      ></InputContainer>
      <Icon name="ic_search_filter" color={theme.colors.darkGrey} size={24} />
    </Container>
  );
};

export default SearchInput;
