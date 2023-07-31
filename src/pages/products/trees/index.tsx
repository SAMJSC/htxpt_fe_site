import React, { useCallback } from 'react';

import AboutPageLayout from '@/app/components/layouts/AboutPageLayout';
import DefaultLayout from '@/app/components/layouts/DefaultLayout';
import TreesPageContent from '@/app/components/modules/PageContent/TreesPageContent';
import { productsList } from '@/app/constants/common';
import { NextPageWithLayout } from '@/pages/_app';

const ProductTreesPage: NextPageWithLayout = (): React.ReactElement => {
  const renderContent = useCallback(() => {
    return <TreesPageContent listProducts={productsList} />;
  }, []);
  return renderContent();
};

ProductTreesPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>
      <AboutPageLayout>{page}</AboutPageLayout>
    </DefaultLayout>
  );
};

export default ProductTreesPage;
