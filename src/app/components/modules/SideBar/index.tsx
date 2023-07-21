import Image from 'next/image';
import React, { useCallback, useState } from 'react';

import Icon from '@/app/components/atoms/Icon';
import SideBarItem from '@/app/components/atoms/SideItem';
import {
  Container,
  ImageContainer,
  OptionsContainer,
} from '@/app/components/modules/SideBar/styled';
import { NAVBAR_ITEMS } from '@/app/constants/sidebar';
import { SideBarItems } from '@/app/types/sidebar';
import { Logo } from '~/public/images';

const SideBar = () => {
  const [isActive, setIsActive] = useState('');
  const handleSideBarItemClicked = useCallback((code: string) => {
    setIsActive(code);
  }, []);
  return (
    <Container>
      <ImageContainer>
        <Image width={129} height={49} src={Logo} alt="logo" />
      </ImageContainer>
      <OptionsContainer>
        {NAVBAR_ITEMS.map((item: SideBarItems) => (
          <SideBarItem
            key={item.code}
            icon={<Icon name={item.icon} />}
            isActive={isActive === item.code}
            onClick={() => handleSideBarItemClicked(item.code)}
            label={item.name}
          />
        ))}
      </OptionsContainer>
    </Container>
  );
};

export default SideBar;
