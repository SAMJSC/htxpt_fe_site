import React from 'react';

import {
  Container,
  ContentContainer,
  ImageContainer,
  ShortDescription,
  Title,
} from '@/app/components/modules/Card/Blog/styled';

export type BlogCardProp = {
  image: string;
  title: string;
  shortDescription: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const BlogCard = ({
  title,
  shortDescription,
  image,
  onClick,
}: BlogCardProp): React.ReactElement => {
  return (
    <Container onClick={onClick}>
      <ImageContainer image={image} />
      <ContentContainer>
        <Title>{title}</Title>
        <ShortDescription>{shortDescription}</ShortDescription>
      </ContentContainer>
    </Container>
  );
};

export default BlogCard;
