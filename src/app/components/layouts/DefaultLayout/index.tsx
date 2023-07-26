import { PropsWithChildren, ReactNode, useCallback } from 'react';

import Header from '@/app/components/modules/Header';
import SideBar from '@/app/components/modules/SideBar';

import { BodyContainer, BodyPage, Container, HeaderContainer, SideBarContainer } from './styled';

type Props = {
  withHeader?: boolean;
  headerNode?: ReactNode;
  sidebarNode?: ReactNode;
};

function DefaultLayout({ headerNode, sidebarNode, children }: PropsWithChildren<Props>) {
  const renderSidebar = useCallback(() => {
    if (sidebarNode) return sidebarNode;
    return <SideBar />;
  }, [sidebarNode]);

  const renderHeader = useCallback(() => {
    if (headerNode) return headerNode;
    return <Header />;
  }, [headerNode]);

  return (
    <Container>
      <SideBarContainer>{renderSidebar()}</SideBarContainer>
      <BodyContainer>
        <HeaderContainer>{renderHeader()}</HeaderContainer>
        <BodyPage>{children}</BodyPage>
      </BodyContainer>
    </Container>
  );
}

export default DefaultLayout;
