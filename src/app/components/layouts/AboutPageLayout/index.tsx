import { useRouter } from 'next/router';
import React, { PropsWithChildren, useCallback } from 'react';

import AboutButtonCategories from '@/app/components/atoms/AboutButtonCategories';
import GardenerButtonCategories from '@/app/components/atoms/GardenersButtonCategories';
import {
  AboutButtonOptions,
  AboutPageLayoutContainer,
  BodyPage,
} from '@/app/components/layouts/AboutPageLayout/styled';

type Props = {
  headerNode?: React.ReactNode;
};

const AboutPageLayout = ({
  headerNode,
  children,
}: PropsWithChildren<Props>): React.ReactElement => {
  const route = useRouter();

  const renderAboutHeader = useCallback(() => {
    if (headerNode) return headerNode;
    return <AboutButtonCategories />;
  }, [headerNode]);

  const renderGardenerListHeader = useCallback(() => {
    if (headerNode) return headerNode;
    return <GardenerButtonCategories />;
  }, [headerNode]);

  return (
    <AboutPageLayoutContainer>
      <AboutButtonOptions>
        {route.pathname.includes('about') ? renderAboutHeader() : renderGardenerListHeader()}
      </AboutButtonOptions>
      <BodyPage>{children}</BodyPage>
    </AboutPageLayoutContainer>
  );
};

export default AboutPageLayout;
