import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

import DefaultLayout from '@/app/components/layouts/DefaultLayout';
import DetailsPageLayout from '@/app/components/layouts/DetailsProductLayout';
import DetailsGardenerPageContent from '@/app/components/modules/PageContent/DetailsGardenerPageContent';
import { NextPageWithLayout } from '@/pages/_app';

const GardenerTreesDetails: NextPageWithLayout = (): React.ReactElement => {
  const router = useRouter();

  const renderContent = useCallback(() => {
    const gardenerId = router.query.gardenerId as string | undefined;
    if (gardenerId) {
      return <DetailsGardenerPageContent gardenerId={gardenerId} />;
    }

    return <div>Gardener not found</div>;
  }, [router.query.gardenerId]);

  return renderContent();
};

GardenerTreesDetails.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>
      <DetailsPageLayout>{page}</DetailsPageLayout>
    </DefaultLayout>
  );
};

export default GardenerTreesDetails;
