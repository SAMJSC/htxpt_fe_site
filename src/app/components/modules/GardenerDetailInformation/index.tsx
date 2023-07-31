import React, { memo } from 'react';
import { useTheme } from 'styled-components';

import Icon from '@/app/components/atoms/Icon';
import {
  ActionButton,
  ActionsContainer,
  GardenerAvatar,
  GardenerDetailInformationContainer,
  GardenerInfo,
  GardenerInformationContainer,
  GardenerName,
  GardenerNameTitle,
  GardenInfo,
  InfoContent,
  InfoItemContent,
  InformationColumn,
  InformationItem,
} from '@/app/components/modules/GardenerDetailInformation/styled';
import { FAVORITE_TEXT, GARDENER_TITLE, MESSAGE_TEXT } from '@/app/constants/common';

type GardenerDetailInformationProps = {
  avatarImage: string;
  backgroundImage: string;
  gardenerName: string;
  products: string[];
  fruitsQuantity: number;
  ratingAverage: number;
  treesQuantity: number;
  responseRate: number;
  ratingQuantity: number;
  joinedAt: Date;
};

const GardenerDetailInformation = memo(
  ({
    avatarImage,
    backgroundImage,
    gardenerName,
    fruitsQuantity,
    products,
    ratingQuantity,
    ratingAverage,
    responseRate,
    treesQuantity,
    joinedAt,
  }: GardenerDetailInformationProps): React.ReactElement => {
    const theme = useTheme();

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(joinedAt);

    return (
      <GardenerDetailInformationContainer>
        <GardenerInformationContainer image={backgroundImage}>
          <InfoContent>
            <GardenerAvatar avatarImage={avatarImage} />
            <GardenerInfo>
              <GardenerNameTitle>{GARDENER_TITLE}</GardenerNameTitle>
              <GardenerName>{gardenerName}</GardenerName>
            </GardenerInfo>
          </InfoContent>
          <ActionsContainer>
            <ActionButton size="md" variant="outlined">
              {FAVORITE_TEXT}
            </ActionButton>
            <ActionButton size="md" variant="outlined">
              {MESSAGE_TEXT}
            </ActionButton>
          </ActionsContainer>
        </GardenerInformationContainer>
        <GardenInfo>
          <InformationColumn>
            <InformationItem>
              <Icon size={24} color={theme.colors.primaryButton} name="ic_card_category_outline" />
              <InfoItemContent>Sản phẩm: {products.join(', ')}</InfoItemContent>
            </InformationItem>
            <InformationItem>
              <Icon size={24} color={theme.colors.primaryButton} name="ic_fruit_outline" />
              <InfoItemContent>Quả: {fruitsQuantity}</InfoItemContent>
            </InformationItem>
            <InformationItem>
              <Icon size={24} color={theme.colors.primaryButton} name="ic_trees_outline" />
              <InfoItemContent>Bonsai: {treesQuantity}</InfoItemContent>
            </InformationItem>
          </InformationColumn>
          <InformationColumn>
            <InformationItem>
              <Icon size={24} color={theme.colors.primaryButton} name="ic_message_quare_outline" />
              <InfoItemContent>Tỉ lệ phản hồi chat: {responseRate}%</InfoItemContent>
            </InformationItem>
            <InformationItem>
              <Icon size={24} color={theme.colors.primaryButton} name="ic_star_outline" />
              <InfoItemContent>{`Đánh giá: ${ratingAverage} (${ratingQuantity} đánh giá)`}</InfoItemContent>
            </InformationItem>
            <InformationItem>
              <Icon size={24} color={theme.colors.primaryButton} name="ic_user_check_outline" />
              <InfoItemContent>Tham gia: {formattedDate}</InfoItemContent>
            </InformationItem>
          </InformationColumn>
        </GardenInfo>
      </GardenerDetailInformationContainer>
    );
  }
);
GardenerDetailInformation.displayName = 'GardenerDetailInformation';
export default GardenerDetailInformation;
