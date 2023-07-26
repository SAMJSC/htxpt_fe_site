import { useCallback } from 'react';

import AboutPageLayout from '@/app/components/layouts/AboutPageLayout';
import DefaultLayout from '@/app/components/layouts/DefaultLayout';
import CommitPageContent from '@/app/components/modules/AboutPageContent/Commit';
import { NextPageWithLayout } from '@/pages/_app';

const Commit: NextPageWithLayout = (): React.ReactElement => {
  const renderContent = useCallback(() => {
    return <CommitPageContent />;
  }, []);
  return renderContent();
};

Commit.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>
      <AboutPageLayout>{page}</AboutPageLayout>
    </DefaultLayout>
  );
};

export default Commit;
