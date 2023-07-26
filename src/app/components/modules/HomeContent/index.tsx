import React, { useCallback, useState } from 'react';

import BlogCard, { BlogCardProp } from '@/app/components/atoms/Card/Blog';
import GardenerCard, { GardenerProps } from '@/app/components/atoms/Card/Gardener';
import ProductCard, { ProductCardProps } from '@/app/components/atoms/Card/Product';
import HomeAbout from '@/app/components/atoms/HomeAbout';
import ScrollSnapBase from '@/app/components/atoms/ScrollSnapBase';
import Slide from '@/app/components/atoms/Slide';
import {
  BlogContainer,
  BlogList,
  BlogTitle,
  BottomContent,
  FruitList,
  FruitsContainer,
  FruitTitle,
  Gardener,
  GardenerList,
  GardenerTitle,
  HomeContentContainer,
  LeftSide,
  NewsContainer,
  RightSide,
  SliderContainer,
  TopInformation,
  TreeContainer,
  TreeList,
  TreeTitle,
} from '@/app/components/modules/HomeContent/styled';
import { BLOG_TITLE, FRUIT_TITLE, GARDENER_TITLE, TREE_TITLE } from '@/app/constants/common';
import { Nature } from '~/public/images';

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
];

type HomeContentProps = {
  gardenersList: GardenerProps[];
  fruitList: ProductCardProps[];
  blogPosts: BlogCardProp[];
  treeList: ProductCardProps[];
};

const HomeContent = ({
  gardenersList,
  fruitList,
  blogPosts,
  treeList,
}: HomeContentProps): React.ReactElement => {
  const [gardenerLikes, setGardenerLikes] = useState<string[]>([]);

  const handleHeartIconClicked = useCallback(
    (id: string) => {
      const isAlreadyLiked = gardenerLikes.includes(id);

      if (isAlreadyLiked) {
        setGardenerLikes(gardenerLikes.filter((gardenerId) => gardenerId !== id));
      } else {
        setGardenerLikes([...gardenerLikes, id]);
      }
    },
    [gardenerLikes]
  );
  return (
    <HomeContentContainer>
      <TopInformation>
        <NewsContainer>
          <HomeAbout image={Nature.src} />
        </NewsContainer>
        <SliderContainer>
          <ScrollSnapBase contentSlide={contentSlide} isShowButtonHeader={true} initialSlice={0} />
        </SliderContainer>
      </TopInformation>
      <Gardener>
        <GardenerTitle>{GARDENER_TITLE}</GardenerTitle>
        <GardenerList>
          {gardenersList.map((gardener: GardenerProps, index: number) => (
            <GardenerCard
              id={gardener.id}
              onHeartIconClick={() => handleHeartIconClicked(gardener.id)}
              key={gardener.gardenerName + index}
              gardenerName={gardener.gardenerName}
              ratingStart={gardener.ratingStart}
              image={gardener.image}
              location={gardener.location}
              phoneNumber={gardener.phoneNumber}
              products={gardener.products}
              isLiked={gardenerLikes.includes(gardener.id)}
            />
          ))}
        </GardenerList>
      </Gardener>
      <BottomContent>
        <LeftSide>
          <FruitsContainer>
            <FruitTitle>{FRUIT_TITLE}</FruitTitle>
            <FruitList>
              {fruitList.map((fruit: ProductCardProps, index: number) => (
                <ProductCard
                  key={fruit.gardener + index}
                  gardener={fruit.gardener}
                  image={fruit.image}
                  status={fruit.status}
                  title={fruit.title}
                />
              ))}
            </FruitList>
          </FruitsContainer>
          <TreeContainer>
            <TreeTitle>{TREE_TITLE}</TreeTitle>
            <TreeList>
              {treeList.map((tree: ProductCardProps, index: number) => (
                <ProductCard
                  key={tree.gardener + index}
                  gardener={tree.gardener}
                  image={tree.image}
                  status={tree.status}
                  title={tree.title}
                />
              ))}
            </TreeList>
          </TreeContainer>
        </LeftSide>
        <RightSide>
          <BlogContainer>
            <BlogTitle>{BLOG_TITLE}</BlogTitle>
            <BlogList>
              {blogPosts.map((blog: BlogCardProp, index: number) => (
                <BlogCard
                  key={blog.title + index}
                  image={blog.image}
                  shortDescription={blog.shortDescription}
                  title={blog.title}
                />
              ))}
            </BlogList>
          </BlogContainer>
        </RightSide>
      </BottomContent>
    </HomeContentContainer>
  );
};

export default HomeContent;
