import React from 'react';

import {
  BodyItem,
  BodyItemContent,
  Container,
  ContentBody,
  ContentContainer,
  ContentHeader,
  ContentTitle,
  ImageContainer,
  LikeIcon,
  RatingStar,
} from '@/app/components/atoms/Card/Gardener/styled';
import Icon from '@/app/components/atoms/Icon';
import { theme } from '@/app/components/modules/ThemeProvider/theme';

type GardenerProps = {
  image: string;
  gardenerName: string;
  ratingStart: number;
  location: string;
  phoneNumber: string;
  products: string[];
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onHeartIconClick?: React.MouseEventHandler<HTMLDivElement>;
  isLiked?: boolean;
};

const GardenerCard = ({
  gardenerName,
  image,
  isLiked,
  onHeartIconClick,
  location,
  phoneNumber,
  products,
  ratingStart,
}: GardenerProps): React.ReactElement => {
  return (
    <Container>
      <ImageContainer image={image}>
        <LikeIcon onClick={onHeartIconClick}>
          <Icon name={isLiked ? 'ic_heart_fill' : 'ic_heart_outline'} />
        </LikeIcon>
      </ImageContainer>
      <ContentContainer>
        <ContentHeader>
          <ContentTitle>{gardenerName}</ContentTitle>
          <RatingStar>
            <Icon name="ic_start" size={10} />
            {ratingStart}
          </RatingStar>
        </ContentHeader>
        <ContentBody>
          <BodyItem>
            <Icon color={theme.colors.primaryButton} name="ic_location_outline" size={12} />
            <BodyItemContent> Địa chỉ: {location}</BodyItemContent>
          </BodyItem>
          <BodyItem>
            <Icon color={theme.colors.primaryButton} name="ic_phone_outline" size={12} />
            <BodyItemContent>Số điện thoại {phoneNumber}</BodyItemContent>
          </BodyItem>
          <BodyItem>
            <Icon color={theme.colors.primaryButton} name="ic_card_category_outline" size={12} />
            <BodyItemContent>Sản phẩm: {products.join(', ')}</BodyItemContent>
          </BodyItem>
        </ContentBody>
      </ContentContainer>
    </Container>
  );
};

export default GardenerCard;
