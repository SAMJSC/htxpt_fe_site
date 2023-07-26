import React from 'react';

import { CommitPageContentContainer } from '@/app/components/modules/AboutPageContent/Commit/styled';
import EmptyPage from '@/app/components/modules/EmptyPage';

const CommitPageContent = (): React.ReactElement => {
  return (
    <CommitPageContentContainer>
      <EmptyPage />
    </CommitPageContentContainer>
  );
};

export default CommitPageContent;
