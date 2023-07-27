import React from 'react';

import { SystemPageContentContainer } from '@/app/components/modules/PageContent/AboutPageContent/System/styled';
import EmptyPage from '@/app/components/modules/PageContent/EmptyPage';

const SystemPageContent = (): React.ReactElement => {
  return (
    <SystemPageContentContainer>
      <EmptyPage />
    </SystemPageContentContainer>
  );
};

export default SystemPageContent;
