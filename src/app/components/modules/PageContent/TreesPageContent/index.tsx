import React from 'react';

import { ProductCardProps } from '@/app/components/modules/Card/Product';
import ListProducts from '@/app/components/modules/ListProducts';
import {
  ListProductsContainer,
  TreesPageContentContainer,
} from '@/app/components/modules/PageContent/TreesPageContent/styled';
import ProductDetailInfo from '@/app/components/modules/ProductDetailInfo';
import { DemoFruit, FruitInfoBg } from '~/public/images';

type TreesPageContentProps = {
  listProducts: ProductCardProps[];
};

const TreesPageContent = ({ listProducts }: TreesPageContentProps): React.ReactElement => {
  return (
    <TreesPageContentContainer>
      <ProductDetailInfo
        products="trees"
        backgroundImage={FruitInfoBg.src}
        demoImage={DemoFruit.src}
        height={[1, 1.5]}
        fruitQuantity={3}
      />
      <ListProductsContainer>
        <ListProducts listProducts={listProducts} />
      </ListProductsContainer>
    </TreesPageContentContainer>
  );
};

export default TreesPageContent;
