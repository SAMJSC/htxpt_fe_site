import React, { useCallback } from 'react';

import AboutPageLayout from '@/app/components/layouts/AboutPageLayout';
import DefaultLayout from '@/app/components/layouts/DefaultLayout';
import FruitsPageContent from '@/app/components/modules/PageContent/FruitsPageContent';
import { productsList } from '@/app/constants/common';
import { NextPageWithLayout } from '@/pages/_app';

const ProductFruitsPage: NextPageWithLayout = (): React.ReactElement => {
  const renderContent = useCallback(() => {
    return <FruitsPageContent listProducts={productsList} />;
  }, []);
  return renderContent();
};

ProductFruitsPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>
      <AboutPageLayout>{page}</AboutPageLayout>
    </DefaultLayout>
  );
};

export default ProductFruitsPage;
