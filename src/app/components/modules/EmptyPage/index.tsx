import React from 'react';

import { EmptyPageContainer } from '@/app/components/modules/EmptyPage/styled';
import { EMPTY_PAGE_TEXT } from '@/app/constants/common';

const EmptyPage = (): React.ReactElement => {
  return <EmptyPageContainer>{EMPTY_PAGE_TEXT}</EmptyPageContainer>;
};

export default EmptyPage;
