import React from 'react';

import Checkbox from '@/app/components/atoms/Checkbox';
import { ProductCardProps } from '@/app/components/modules/Card/Product';
import ListProducts from '@/app/components/modules/ListProducts';
import {
  FruitsPageContentContainer,
  FruitsTypeOptionsContainer,
  ListProductsContainer,
} from '@/app/components/modules/PageContent/FruitsPageContent/styled';
import ProductDetailInfo from '@/app/components/modules/ProductDetailInfo';
import { FruitsCheckBox } from '@/app/constants/common';
import { FruitsCheckBoxType } from '@/app/types/common';
import { DemoFruit, FruitInfoBg } from '~/public/images';

type FruitsPageContentProps = {
  listProducts: ProductCardProps[];
};

const FruitsPageContent = ({ listProducts }: FruitsPageContentProps): React.ReactElement => {
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
      <ListProductsContainer>
        <ListProducts listProducts={listProducts} />
      </ListProductsContainer>
    </FruitsPageContentContainer>
  );
};

export default FruitsPageContent;
