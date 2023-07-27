import { useCallback } from 'react';

import AboutPageLayout from '@/app/components/layouts/AboutPageLayout';
import DefaultLayout from '@/app/components/layouts/DefaultLayout';
import StrategyPageContent from '@/app/components/modules/PageContent/AboutPageContent/Strategy';
import { NextPageWithLayout } from '@/pages/_app';

const Strategy: NextPageWithLayout = (): React.ReactElement => {
  const renderContent = useCallback(() => {
    return <StrategyPageContent />;
  }, []);
  return renderContent();
};

Strategy.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>
      <AboutPageLayout>{page}</AboutPageLayout>
    </DefaultLayout>
  );
};

export default Strategy;
