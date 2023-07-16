import Image from 'next/image';
import React from 'react';

import Icon from '@/app/components/atoms/Icon';
import { AvatarContainer, Container } from '@/app/components/atoms/UserMenu/styled';
import { Nature } from '~/public/images';

const UserMenu = (): React.ReactElement => {
  return (
    <Container>
      <Icon name="ic_menu_outline" size={16} />
      <AvatarContainer>
        <Image src={Nature.src} alt="nature" width={24} height={24} />
      </AvatarContainer>
    </Container>
  );
};

export default UserMenu;
