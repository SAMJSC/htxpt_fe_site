import React from 'react';

import { HumanResourcesPageContentContainer } from '@/app/components/modules/AboutPageContent/HumanResources/styled';
import EmptyPage from '@/app/components/modules/EmptyPage';

const HumanResourcesPageContent = (): React.ReactElement => {
  return (
    <HumanResourcesPageContentContainer>
      <EmptyPage />
    </HumanResourcesPageContentContainer>
  );
};

export default HumanResourcesPageContent;
