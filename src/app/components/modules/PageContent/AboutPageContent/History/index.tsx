import React from 'react';

import { HistoryContainer } from '@/app/components/modules/PageContent/AboutPageContent/History/styled';
import EmptyPage from '@/app/components/modules/PageContent/EmptyPage';

const HistoryPageContent = (): React.ReactElement => {
  return (
    <HistoryContainer>
      <EmptyPage />
    </HistoryContainer>
  );
};

export default HistoryPageContent;
