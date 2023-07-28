import React from 'react';

import ProductCard, { ProductCardProps } from '@/app/components/atoms/Card/Product';
import Checkbox from '@/app/components/atoms/Checkbox';
import {
  FruitsPageContentContainer,
  FruitsTypeOptionsContainer,
  ListFruitItems,
} from '@/app/components/modules/PageContent/FruitsPageContent/styled';
import ProductDetailInfo from '@/app/components/modules/ProductDetailInfo';
import { FruitsCheckBox } from '@/app/constants/common';
import { FruitsCheckBoxType } from '@/app/types/common';
import { DemoFruit, FruitInfoBg } from '~/public/images';

type FruitsPageContentProps = {
  productList: ProductCardProps[];
};

const FruitsPageContent = ({ productList }: FruitsPageContentProps): React.ReactElement => {
  return (
    <FruitsPageContentContainer>
      <FruitsTypeOptionsContainer>
        {FruitsCheckBox.map((checkbox: FruitsCheckBoxType) => (
          <Checkbox key={checkbox.code} label={checkbox.label} labelAlignment="right" checked />
        ))}
      </FruitsTypeOptionsContainer>
      <ProductDetailInfo
        products="fruits"
        backgroundImage={FruitInfoBg.src}
        demoImage={DemoFruit.src}
        diameter={[15, 20]}
        weight={[1.5, 3]}
      />
      <ListFruitItems>
        {productList.map((product: ProductCardProps, index: number) => (
          <ProductCard
            key={product.gardener + index}
            gardener={product.gardener}
            image={product.image}
            status={product.status}
            title={product.title}
          />
        ))}
      </ListFruitItems>
    </FruitsPageContentContainer>
  );
};

export default FruitsPageContent;
