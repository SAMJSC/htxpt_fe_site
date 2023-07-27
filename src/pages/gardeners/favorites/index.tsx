import React, { useCallback } from 'react';

import AboutPageLayout from '@/app/components/layouts/AboutPageLayout';
import DefaultLayout from '@/app/components/layouts/DefaultLayout';
import FavoriteGardenersPageContent from '@/app/components/modules/PageContent/FavoriteGardenersPageContent';
import { NextPageWithLayout } from '@/pages/_app';

const FavoritesGardener: NextPageWithLayout = (): React.ReactElement => {
  const renderContent = useCallback(() => {
    return <FavoriteGardenersPageContent />;
  }, []);

  return renderContent();
};

FavoritesGardener.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>
      <AboutPageLayout>{page}</AboutPageLayout>
    </DefaultLayout>
  );
};

export default FavoritesGardener;
