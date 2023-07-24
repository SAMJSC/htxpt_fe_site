import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { ReactNode, useCallback, useRef, useState } from 'react';
import Slider from 'react-slick';

import Indicator from '@/app/components/atoms/ScrollSnapBase/Indicator';
import { Container, ScrollSnapBaseBox } from '@/app/components/atoms/ScrollSnapBase/styled';

export type ScrollSnapBaseItem = {
  id?: string | number;
  titleHeader?: string | number;
  content?: ReactNode;
  images?: ImageItemProps;
};

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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
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
      <Indicator dataLength={contentSlide ?? []} index={index} sliderRef={customSlider} />
    </ScrollSnapBaseBox>
  );
};

export default ScrollSnapBase;
