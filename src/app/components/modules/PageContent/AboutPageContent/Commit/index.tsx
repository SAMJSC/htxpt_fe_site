import React from 'react';

import { CommitPageContentContainer } from '@/app/components/modules/PageContent/AboutPageContent/Commit/styled';
import EmptyPage from '@/app/components/modules/PageContent/EmptyPage';

const CommitPageContent = (): React.ReactElement => {
  return (
    <CommitPageContentContainer>
      <EmptyPage />
    </CommitPageContentContainer>
  );
};

export default CommitPageContent;
