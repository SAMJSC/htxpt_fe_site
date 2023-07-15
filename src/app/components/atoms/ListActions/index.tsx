import React from 'react';

import ActionItem from '@/app/components/atoms/ListActions/ActionItem';
import { Container } from '@/app/components/atoms/ListActions/styled';
import { Action } from '@/app/types/common';

type ListActionProps = {
  listActions: Action[];
};

const ListAction = ({ listActions }: ListActionProps): React.ReactElement => {
  return (
    <Container>
      {listActions.map((action: Action, index: number) => (
        <ActionItem action={action} key={index}></ActionItem>
      ))}
    </Container>
  );
};

export default ListAction;
