import React from 'react';

import News from '@/app/components/atoms/News';
import Slide from '@/app/components/atoms/Slide';
import { HomeContentContainer, TopInformation } from '@/app/components/modules/HomeContent/styled';
import ScrollSnapBase from '@/app/components/modules/ScrollSnapBase';

const contentSlide = [
  {
    id: 1,
    content: <Slide />,
  },
  {
    id: 2,
    content: <Slide />,
  },
  {
    id: 3,
    content: <Slide />,
  },
  {
    id: 4,
    content: <Slide />,
  },
];

const HomeContent = (): React.ReactElement => {
  return (
    <HomeContentContainer>
      <TopInformation>
        <News />
        <Slide />
      </TopInformation>
      {/* <ScrollSnapBase contentSlide={contentSlide} isShowButtonHeader={true} initialSlice={1} /> */}
    </HomeContentContainer>
  );
};

export default HomeContent;
