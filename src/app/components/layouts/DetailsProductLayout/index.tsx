import React, { PropsWithChildren } from 'react';

import { DetailsPageLayoutContainer } from '@/app/components/layouts/DetailsProductLayout/styled';

const DetailsPageLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  return <DetailsPageLayoutContainer>{children}</DetailsPageLayoutContainer>;
};

export default DetailsPageLayout;
