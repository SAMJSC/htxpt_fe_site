import React from 'react';

import {
  Container,
  ListActionContainer,
  PromptContainer,
} from '@/app/components/atoms/Dropdown/styled';
import ListAction from '@/app/components/atoms/ListActions';
import { Action } from '@/app/types/common';

type DropdownProps = {
  children?: React.ReactNode;
  listActions: Action[];
  isShowOptions: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const Dropdown = ({
  children,
  listActions,
  onClick,
  isShowOptions,
}: DropdownProps): React.ReactElement => {
  const [isAnimatingOut, setIsAnimatingOut] = React.useState(false);

  React.useEffect(() => {
    if (!isShowOptions) {
      setIsAnimatingOut(true);
    }
  }, [isShowOptions]);

  return (
    <Container onClick={onClick}>
      <PromptContainer>{children}</PromptContainer>
      {(isShowOptions || isAnimatingOut) && (
        <ListActionContainer isShowOptions={isShowOptions}>
          <ListAction listActions={listActions} />
        </ListActionContainer>
      )}
    </Container>
  );
};

export default Dropdown;
