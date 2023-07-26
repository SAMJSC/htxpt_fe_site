import React, { useCallback } from 'react';

import AboutPageLayout from '@/app/components/layouts/AboutPageLayout';
import DefaultLayout from '@/app/components/layouts/DefaultLayout';
import HistoryPageContent from '@/app/components/modules/AboutPageContent/History';
import { NextPageWithLayout } from '@/pages/_app';

const History: NextPageWithLayout = (): React.ReactElement => {
  const renderContent = useCallback(() => {
    return <HistoryPageContent />;
  }, []);
  return renderContent();
};

History.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>
      <AboutPageLayout>{page}</AboutPageLayout>
    </DefaultLayout>
  );
};

export default History;
