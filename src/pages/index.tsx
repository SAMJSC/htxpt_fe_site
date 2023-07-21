import { NextPage } from 'next';
import React, { useCallback } from 'react';

import DefaultLayout from '@/app/components/layouts/DefaultLayout';
import HomeContent from '@/app/components/modules/HomeContent';

const IndexPage: NextPage = (): React.ReactElement => {
  const renderContent = useCallback(() => {
    return <HomeContent />;
  }, []);
  return <DefaultLayout>{renderContent()}</DefaultLayout>;
};

export default IndexPage;
