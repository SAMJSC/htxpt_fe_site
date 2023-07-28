import React from 'react';

import {
  DemoProductImage,
  DescriptionBullet,
  DescriptionContainer,
  DescriptionTitle,
  ProductDetailContentContainer,
  ProductDetailImageContainer,
  ProductDetailInfoContainer,
} from '@/app/components/modules/ProductDetailInfo/styled';

type ProductDetailInfoProps = {
  backgroundImage: string;
  demoImage: string;
} & (
  | {
      products: 'fruits';
      diameter: number[];
      weight: number[];
    }
  | {
      products: 'trees';
      height: number;
      fruitQuantity: number;
    }
);

const ProductDetailInfo = ({
  backgroundImage,
  demoImage,
  products,
  ...props
}: ProductDetailInfoProps): React.ReactElement => {
  return (
    <ProductDetailInfoContainer backgroundImage={backgroundImage}>
      {products === 'fruits' && 'diameter' in props ? (
        <ProductDetailContentContainer>
          <DescriptionTitle>Mô tả:</DescriptionTitle>
          <DescriptionContainer>
            <DescriptionBullet>
              Đường kính: Từ {props.weight[0]}cm đến {props.weight[1]}cm
            </DescriptionBullet>
            <DescriptionBullet>
              Trọng lượng: Từ {props.diameter[0]}kg {props.diameter[1]}kg
            </DescriptionBullet>
            <DescriptionBullet>Màu sắc: xanh, vàng chanh bóng</DescriptionBullet>
            <DescriptionBullet>Tay ngón: Có tay ngón, hình dáng đẹp</DescriptionBullet>
            <DescriptionBullet>Thời gian trưng : 1-5 tháng</DescriptionBullet>
            <DescriptionBullet>Sử dụng: Thăm biếu bạn bè, trưng tết, để thờ,…</DescriptionBullet>
          </DescriptionContainer>
        </ProductDetailContentContainer>
      ) : (
        ''
      )}
      <ProductDetailImageContainer>
        <DemoProductImage src={demoImage} />
      </ProductDetailImageContainer>
    </ProductDetailInfoContainer>
  );
};

export default ProductDetailInfo;
