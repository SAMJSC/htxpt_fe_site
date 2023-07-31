import React from 'react';

import { Container, Tab, TabItem, TabTitle } from '@/app/components/atoms/Tabs/styled';
import { TabBase } from '@/app/types/common';

type Tab<T> = TabBase & { [P in keyof T]: T[P] };

type Props<T> = {
  items: Array<Tab<T>>;
  activeItemCode?: TabBase['code'];
  onItemClick?: (item: Tab<T>, index: number) => void;
};

const Tabs = <T extends { [key in string]: string | number | boolean }>({
  items,
  activeItemCode,
  onItemClick,
}: Props<T>): React.ReactElement => {
  return (
    <Container>
      {items.map((item, itemIndex) => {
        const active = Boolean(activeItemCode) && item.code === activeItemCode;
        return (
          <Tab
            key={itemIndex}
            active={active}
            onClick={() => {
              onItemClick?.(item, itemIndex);
            }}
          >
            <TabItem size="lg" variant="text" shadow borderRadius="normal" isActive={active}>
              <TabTitle active={active}>{item.label}</TabTitle>
            </TabItem>
          </Tab>
        );
      })}
    </Container>
  );
};

export default Tabs;
