import React from 'react';

import ProductCard, { ProductCardProps } from '@/app/components/atoms/Card/Product';
import {
  ListTreeItems,
  TreesPageContentContainer,
} from '@/app/components/modules/PageContent/TreesPageContent/styled';
import ProductDetailInfo from '@/app/components/modules/ProductDetailInfo';
import { DemoFruit, FruitInfoBg } from '~/public/images';

type TreesPageContentProps = {
  productList: ProductCardProps[];
};

const TreesPageContent = ({ productList }: TreesPageContentProps): React.ReactElement => {
  return (
    <TreesPageContentContainer>
      <ProductDetailInfo
        products="trees"
        backgroundImage={FruitInfoBg.src}
        demoImage={DemoFruit.src}
        height={[1, 1.5]}
        fruitQuantity={3}
      />
      <ListTreeItems>
        {productList.map((product: ProductCardProps, index: number) => (
          <ProductCard
            key={product.gardener + index}
            gardener={product.gardener}
            image={product.image}
            status={product.status}
            title={product.title}
          />
        ))}
      </ListTreeItems>
    </TreesPageContentContainer>
  );
};

export default TreesPageContent;
