import { useCallback } from 'react';

import AboutPageLayout from '@/app/components/layouts/AboutPageLayout';
import DefaultLayout from '@/app/components/layouts/DefaultLayout';
import AboutUsPageContent from '@/app/components/modules/PageContent/AboutPageContent/AboutUs';
import { NextPageWithLayout } from '@/pages/_app';

const AboutUs: NextPageWithLayout = (): React.ReactElement => {
  const renderContent = useCallback(() => {
    return <AboutUsPageContent />;
  }, []);
  return renderContent();
};

AboutUs.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>
      <AboutPageLayout>{page}</AboutPageLayout>
    </DefaultLayout>
  );
};

export default AboutUs;
