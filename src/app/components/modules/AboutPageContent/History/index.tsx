import React from 'react';

import { HistoryContainer } from '@/app/components/modules/AboutPageContent/History/styled';
import EmptyPage from '@/app/components/modules/EmptyPage';

const HistoryPageContent = (): React.ReactElement => {
  return (
    <HistoryContainer>
      <EmptyPage />
    </HistoryContainer>
  );
};

export default HistoryPageContent;
