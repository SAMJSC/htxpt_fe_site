import Image from 'next/image';
import React from 'react';

import {
  AboutUsContentContainer,
  CEOContentInfo,
  CEODetailInfo,
  CEOImage,
  CEOInfoContainer,
  CEOName,
  CEOSlogan,
  ContentText,
  CoreValueContent,
  CoreValueContentContainer,
  CoreValueContentText,
  CoreValueImage,
  CoreValueItemContainer,
  CoreValueListItem,
  CoreValueTitle,
  HightLight,
  LeftContentContainer,
  MissionContent,
  MissionContentContainer,
  RightContentContainer,
  RoleName,
  Title,
  TopContentContainer,
  VisionContent,
  VisionContentContainer,
} from '@/app/components/modules/AboutPageContent/AboutUs/styled';
import {
  CEO_NAME,
  CORE_VALUE_CONTENT_TEXT,
  CORE_VALUE_TITLE_TEXT,
  CoreValueItem,
  GENDER,
  MISSION_CONTENT_TEXT,
  MISSION_TITLE_TEXT,
  ROLE_NAME,
  VISION_CONTENT_TEXT,
  VISION_TITLE_TEXT,
} from '@/app/constants/about';
import { CoreValueContentItem } from '@/app/types/about';
import { CEOAvatar } from '~/public/images';

const AboutUsPageContent = (): React.ReactElement => {
  return (
    <AboutUsContentContainer>
      <TopContentContainer>
        <LeftContentContainer>
          <VisionContentContainer>
            <Title>{VISION_TITLE_TEXT}</Title>
            <VisionContent>{VISION_CONTENT_TEXT}</VisionContent>
          </VisionContentContainer>
          <MissionContentContainer>
            <Title>{MISSION_TITLE_TEXT}</Title>
            <MissionContent>{MISSION_CONTENT_TEXT}</MissionContent>
          </MissionContentContainer>
        </LeftContentContainer>
        <RightContentContainer>
          <CEOContentInfo>
            <CEOInfoContainer>
              <CEOImage>
                <Image width={122} height={169} src={CEOAvatar.src} alt="avatar" />
              </CEOImage>
              <CEODetailInfo>
                <CEOName>
                  {GENDER} {CEO_NAME}
                </CEOName>
                <RoleName>{ROLE_NAME}</RoleName>
              </CEODetailInfo>
            </CEOInfoContainer>
            <CEOSlogan>
              <HightLight>&ldquo; Đoàn kết</HightLight> là sức mạnh… khi có sự{' '}
              <HightLight>chung sức</HightLight> và <HightLight>hợp tác</HightLight>, ta có thể đạt
              được những điều <HightLight>tuyệt vời. &rdquo;</HightLight>
            </CEOSlogan>
          </CEOContentInfo>
        </RightContentContainer>
      </TopContentContainer>
      <CoreValueContentContainer>
        <Title>{CORE_VALUE_TITLE_TEXT}</Title>
        <CoreValueContent>
          <ContentText>{CORE_VALUE_CONTENT_TEXT}</ContentText>
          <CoreValueListItem>
            {CoreValueItem.map((item: CoreValueContentItem) => (
              <CoreValueItemContainer key={item.content}>
                <CoreValueImage image={item.image}></CoreValueImage>
                <CoreValueTitle>{item.title}</CoreValueTitle>
                <CoreValueContentText>{item.content}</CoreValueContentText>
              </CoreValueItemContainer>
            ))}
          </CoreValueListItem>
        </CoreValueContent>
      </CoreValueContentContainer>
    </AboutUsContentContainer>
  );
};

export default AboutUsPageContent;
