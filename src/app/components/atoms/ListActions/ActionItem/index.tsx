import React, { useCallback } from 'react';

import { Action } from '@/app/types/common';

import { Container } from './styled';

type ActionItemProps = {
  action: Action;
};

const ActionItem = ({ action }: ActionItemProps): React.ReactElement => {
  const handleClick = useCallback(() => {
    action.handler();
  }, [action]);

  return <Container onClick={handleClick}>{action.label}</Container>;
};

export default ActionItem;
