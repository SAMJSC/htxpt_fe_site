import React, { useCallback } from 'react';

import AboutPageLayout from '@/app/components/layouts/AboutPageLayout';
import DefaultLayout from '@/app/components/layouts/DefaultLayout';
import { NextPageWithLayout } from '@/pages/_app';

const ProductTreesPage: NextPageWithLayout = (): React.ReactElement => {
  const renderContent = useCallback(() => {
    return <div>trees</div>;
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
