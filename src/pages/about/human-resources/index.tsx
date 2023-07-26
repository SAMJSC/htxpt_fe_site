import { useCallback } from 'react';

import AboutPageLayout from '@/app/components/layouts/AboutPageLayout';
import DefaultLayout from '@/app/components/layouts/DefaultLayout';
import HumanResourcesPageContent from '@/app/components/modules/AboutPageContent/HumanResources';
import { NextPageWithLayout } from '@/pages/_app';

const HumanResource: NextPageWithLayout = (): React.ReactElement => {
  const renderContent = useCallback(() => {
    return <HumanResourcesPageContent />;
  }, []);
  return renderContent();
};

HumanResource.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>
      <AboutPageLayout>{page}</AboutPageLayout>
    </DefaultLayout>
  );
};

export default HumanResource;
