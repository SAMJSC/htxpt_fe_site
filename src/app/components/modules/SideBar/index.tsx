import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { memo } from 'react';

import Icon from '@/app/components/atoms/Icon';
import SideBarItem from '@/app/components/atoms/SideBarItem';
import {
  ActiveIndicator,
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
import { HelpCenter, Logo } from '~/public/images';

const SideBarComponent = () => {
  const router = useRouter();

  const getHref = (code: string): string => {
    if (code === 'ABOUT') return '/about/htx-phat-thu';
    if (code === 'HOME') return '/';
    return `/${code.toLowerCase()}`;
  };

  const isActive = (itemCode: string, href: string) => {
    if (itemCode === 'HOME') {
      return router.pathname === '/';
    } else if (itemCode === 'ABOUT') {
      return router.pathname.includes('/about');
    } else {
      return router.pathname.includes(href);
    }
  };

  const activeIndex = NAVBAR_ITEMS.findIndex((item) => isActive(item.code, getHref(item.code)));

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={Logo} alt="logo" onClick={handleLogoClick} />
      </ImageContainer>
      <OptionsContainer>
        <ActiveIndicator index={activeIndex} />
        {NAVBAR_ITEMS.map((item: SideBarItems) => {
          const href = getHref(item.code);
          return (
            <Link
              key={item.code}
              href={
                item.code === 'ABOUT'
                  ? '/about/us'
                  : item.code === 'HOME'
                  ? '/'
                  : item.code === 'PRODUCTS'
                  ? '/products/fruits'
                  : `/${item.code.toLowerCase()}`
              }
              legacyBehavior
            >
              <a>
                <SideBarItem
                  icon={<Icon name={item.icon} />}
                  isActive={isActive(item.code, href)}
                  label={item.name}
                />
              </a>
            </Link>
          );
        })}
      </OptionsContainer>
      <HelpCenterContainer image={HelpCenter.src}>
        <HelpCenterTitle>{HELP_CENTER_TITLE_TEXT}</HelpCenterTitle>
        <HelpCenterContent>{HELP_CENTER_CONTENT_TEXT}</HelpCenterContent>
        <HelpCenterButton>{HELP_CENTER_BUTTON_CONTENT}</HelpCenterButton>
      </HelpCenterContainer>
    </Container>
  );
};

const SideBar = memo(SideBarComponent);
SideBar.displayName = 'SideBar';

export default SideBar;
