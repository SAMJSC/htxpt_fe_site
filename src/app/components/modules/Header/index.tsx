import { useCallback, useState } from 'react';

import Dropdown from '@/app/components/atoms/Dropdown';
import SearchInput from '@/app/components/atoms/SearchInput';
import UserMenu from '@/app/components/atoms/UserMenu';
import {
  Container,
  HeaderRight,
  SloganContainer,
  SloganText,
  WelcomeText,
} from '@/app/components/modules/Header/styled';
import { SLOGAN_TEXT, WELCOME_TEXT } from '@/app/constants/header';
import { Action } from '@/app/types/common';

const actions: Action[] = [
  {
    id: 'signup',
    label: 'Sign Up',
    handler: () => {
      console.log('Sign Up action triggered');
    },
  },
  {
    id: 'signin',
    label: 'Sign In',
    handler: () => {
      console.log('Sign In action triggered');
    },
  },
  {
    id: 'setting',
    label: 'Settings',
    handler: () => {
      console.log('Settings action triggered');
    },
  },
];

const Header = (): React.ReactElement => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleUserMenuClicked = useCallback(() => {
    setIsShowMenu((pre) => !pre);
  }, []);
  return (
    <Container>
      <SloganContainer>
        <WelcomeText>{WELCOME_TEXT}</WelcomeText>
        <SloganText>{SLOGAN_TEXT}</SloganText>
      </SloganContainer>
      <SearchInput />
      <HeaderRight>
        <Dropdown isShowOptions={isShowMenu} listActions={actions} onClick={handleUserMenuClicked}>
          <UserMenu />
        </Dropdown>
      </HeaderRight>
    </Container>
  );
};

export default Header;
