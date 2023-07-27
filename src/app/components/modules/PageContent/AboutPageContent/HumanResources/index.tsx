import React from 'react';

import { HumanResourcesPageContentContainer } from '@/app/components/modules/PageContent/AboutPageContent/HumanResources/styled';
import EmptyPage from '@/app/components/modules/PageContent/EmptyPage';

const HumanResourcesPageContent = (): React.ReactElement => {
  return (
    <HumanResourcesPageContentContainer>
      <EmptyPage />
    </HumanResourcesPageContentContainer>
  );
};

export default HumanResourcesPageContent;
