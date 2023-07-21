import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import React, { ReactNode, RefObject, useCallback, useRef, useState } from 'react';
import Slider from 'react-slick';

import { Container, ScrollSnapBaseBox } from '@/app/components/modules/ScrollSnapBase/styled';
import Indicator from '@/app/components/modules/ScrollSnapBase/Indicator';

export type ScrollSnapBaseItem = {
  id?: string | number;
  titleHeader?: string | number;
  content?: ReactNode;
  images?: ImageItemProps;
};

type TimeItemProps = {
  prevTitle: string;
  nextTitle: string;
};

type TimeBoxProps = {
  isShowButton: boolean;
  title?: string | number;
  index: string | number;
  length: number;
  customSlider: RefObject<Slider>;
} & TimeItemProps;

type ScrollSnapBaseProps = {
  isShowButtonHeader: boolean;
  contentSlide: ScrollSnapBaseItem[];
  initialSlice?: number;
};

type ImageItemProps = {
  src: string;
  alt: string;
  loader: string;
  width?: number;
  height?: number;
};

const ScrollSnapBase = ({ contentSlide, initialSlice }: ScrollSnapBaseProps) => {
  const customSlider = useRef<Slider>(null);
  const [index, setIndex] = useState<number>(initialSlice || 0);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handlerBeforeChange = useCallback((_oldIndex: number, newIndex: number) => {
    setIndex(newIndex);
  }, []);
  return (
    <ScrollSnapBaseBox>
      <Slider
        beforeChange={handlerBeforeChange}
        initialSlide={initialSlice}
        ref={customSlider}
        {...settings}
      >
        {contentSlide?.map((slide: ScrollSnapBaseItem) => {
          return <Container key={slide.id}>{slide.content}</Container>;
        })}
      </Slider>
      <Indicator dataLength={contentSlide ?? []} index={index} />
    </ScrollSnapBaseBox>
  );
};

export default ScrollSnapBase;
