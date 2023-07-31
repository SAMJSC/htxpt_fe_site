import React from 'react';

import ProductCard, { ProductCardProps } from '@/app/components/modules/Card/Product';
import { ListProductsContainer } from '@/app/components/modules/ListProducts/styled';

type ListProductsProps = {
  listProducts: ProductCardProps[];
};

const ListProducts = ({ listProducts }: ListProductsProps): React.ReactElement => {
  return (
    <ListProductsContainer>
      {listProducts.map((product: ProductCardProps, index: number) => (
        <ProductCard
          key={product.gardener + index}
          gardener={product.gardener}
          image={product.image}
          status={product.status}
          title={product.title}
        />
      ))}
    </ListProductsContainer>
  );
};

export default ListProducts;
