import React from 'react';

import {
  Container,
  ContentBody,
  ContentContainer,
  ContentLine,
  ImageContainer,
  Title,
} from '@/app/components/atoms/Card/Product/styled';
import { GARDENER_TEXT, STATUS_TEXT } from '@/app/types/common';
import { PRODUCT_STATUS, ProductStatusCode } from '@/app/types/product';

export type ProductCardProps = {
  image: string;
  title: string;
  gardener: string;
  status: ProductStatusCode;
};

const ProductCard = ({
  title,
  image,
  gardener,
  status = 'AVAILABLE',
}: ProductCardProps): React.ReactElement => {
  return (
    <Container>
      <ImageContainer image={image} />
      <ContentContainer>
        <Title>{title}</Title>
        <ContentBody>
          <ContentLine>
            {GARDENER_TEXT} : {gardener}
          </ContentLine>
          <ContentLine>
            {STATUS_TEXT} : {PRODUCT_STATUS[status]}
          </ContentLine>
        </ContentBody>
      </ContentContainer>
    </Container>
  );
};

export default ProductCard;
