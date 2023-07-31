import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

import AboutButtonCategories from '@/app/components/atoms/AboutButtonCategories';
import GardenerButtonCategories from '@/app/components/atoms/GardenersButtonCategories';
import ProductsTypeButtons from '@/app/components/atoms/ProductsTypeButtons';
import {
  AboutButtonOptions,
  AboutPageLayoutContainer,
  BodyPage,
} from '@/app/components/layouts/AboutPageLayout/styled';

const AboutPageLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  const route = useRouter();

  let HeaderComponent;

  if (route.pathname.includes('about')) {
    HeaderComponent = AboutButtonCategories;
  } else if (route.pathname.includes('products')) {
    HeaderComponent = ProductsTypeButtons;
  } else {
    HeaderComponent = GardenerButtonCategories;
  }

  return (
    <AboutPageLayoutContainer>
      <AboutButtonOptions>
        <HeaderComponent />
      </AboutButtonOptions>
      <BodyPage>{children}</BodyPage>
    </AboutPageLayoutContainer>
  );
};

export default AboutPageLayout;
