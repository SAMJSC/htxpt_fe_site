import { useCallback } from 'react';

import AboutPageLayout from '@/app/components/layouts/AboutPageLayout';
import DefaultLayout from '@/app/components/layouts/DefaultLayout';
import SystemPageContent from '@/app/components/modules/AboutPageContent/System';
import { NextPageWithLayout } from '@/pages/_app';

const System: NextPageWithLayout = (): React.ReactElement => {
  const renderContent = useCallback(() => {
    return <SystemPageContent />;
  }, []);
  return renderContent();
};

System.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>
      <AboutPageLayout>{page}</AboutPageLayout>
    </DefaultLayout>
  );
};

export default System;
