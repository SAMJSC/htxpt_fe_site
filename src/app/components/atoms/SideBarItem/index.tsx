import React from 'react';

import {
  Container,
  IconContainer,
  LabelContainer,
} from '@/app/components/atoms/SideBarItem/styled';

type NavbarItemProps = {
  icon: React.ReactElement;
  label?: string;
  isActive: boolean;
  onClick?: () => void;
};

const SideBarItem = ({ icon, label, isActive, onClick }: NavbarItemProps): React.ReactElement => {
  return (
    <Container isActive={isActive} onClick={onClick}>
      <IconContainer>{icon}</IconContainer>
      <LabelContainer>{label}</LabelContainer>
    </Container>
  );
};

export default SideBarItem;