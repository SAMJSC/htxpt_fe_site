import Image from 'next/image';
import React, { useCallback, useState } from 'react';

import Icon from '@/app/components/atoms/Icon';
import SideBarItem from '@/app/components/atoms/SideItem';
import {
  Container,
  HelpCenterButton,
  HelpCenterContainer,
  HelpCenterContent,
  HelpCenterTitle,
  ImageContainer,
  OptionsContainer,
} from '@/app/components/modules/SideBar/styled';
import {
  HELP_CENTER_BUTTON_CONTENT,
  HELP_CENTER_CONTENT_TEXT,
  HELP_CENTER_TITLE_TEXT,
  NAVBAR_ITEMS,
} from '@/app/constants/sidebar';
import { SideBarItems } from '@/app/types/sidebar';
import { HelpCenterBackground, Logo } from '~/public/images';

const SideBar = (): React.ReactElement => {
  const [isActive, setIsActive] = useState('HOME');
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
      <HelpCenterContainer image={HelpCenterBackground.src}>
        <HelpCenterTitle>{HELP_CENTER_TITLE_TEXT}</HelpCenterTitle>
        <HelpCenterContent>{HELP_CENTER_CONTENT_TEXT}</HelpCenterContent>
        <HelpCenterButton>{HELP_CENTER_BUTTON_CONTENT}</HelpCenterButton>
      </HelpCenterContainer>
    </Container>
  );
};

export default SideBar;
