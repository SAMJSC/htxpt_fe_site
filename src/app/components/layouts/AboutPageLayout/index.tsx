import React, { PropsWithChildren, useCallback } from 'react';

import {
  AboutButtonOptions,
  AboutPageLayoutContainer,
  BodyPage,
} from '@/app/components/layouts/AboutPageLayout/styled';
import AboutButtonCategories from '@/app/components/modules/AboutButtonCategories';

type Props = {
  headerNode?: React.ReactNode;
};

const AboutPageLayout = ({
  headerNode,
  children,
}: PropsWithChildren<Props>): React.ReactElement => {
  const renderHeader = useCallback(() => {
    if (headerNode) return headerNode;
    return <AboutButtonCategories />;
  }, [headerNode]);
  return (
    <AboutPageLayoutContainer>
      <AboutButtonOptions>{renderHeader()}</AboutButtonOptions>
      <BodyPage>{children}</BodyPage>
    </AboutPageLayoutContainer>
  );
};

export default AboutPageLayout;
