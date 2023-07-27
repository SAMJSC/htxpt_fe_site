import React, { useCallback } from 'react';

import AboutPageLayout from '@/app/components/layouts/AboutPageLayout';
import DefaultLayout from '@/app/components/layouts/DefaultLayout';
import GardenersPageContent from '@/app/components/modules/PageContent/GardenersPageContent';
import { NextPageWithLayout } from '@/pages/_app';

const Gardeners: NextPageWithLayout = (): React.ReactElement => {
  const renderContent = useCallback(() => {
    return <GardenersPageContent />;
  }, []);
  return renderContent();
};

Gardeners.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>
      <AboutPageLayout>{page}</AboutPageLayout>
    </DefaultLayout>
  );
};

export default Gardeners;
