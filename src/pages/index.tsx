import { NextPage } from 'next';
import React, { useCallback } from 'react';

import { BlogCardProp } from '@/app/components/modules/Card/Blog';
import HomeContent from '@/app/components/modules/HomeContent';
import { gardenersList, productsList } from '@/app/constants/common';
import { Nature } from '~/public/images';

const blogPosts: BlogCardProp[] = [
  {
    image: Nature.src,
    title: 'The Art of Gardening: A Comprehensive Guide',
    shortDescription:
      'Discover the art of gardening with this comprehensive guide, where we discuss various gardening techniques and tips for beginners and professionals alike.',
  },
  {
    image: Nature.src,
    title: 'Understanding Soil Health: A Key Factor in Gardening',
    shortDescription:
      'Soil health plays a crucial role in the success of your garden. Learn how to assess and improve the health of your soil in this informative post.',
  },
  {
    image: Nature.src,
    title: 'Indoor Gardening: Top Plants to Grow at Home',
    shortDescription:
      "Indoor gardening can be a rewarding hobby. Explore our list of top plants you can easily grow at home, even if you're a beginner!",
  },
  {
    image: Nature.src,
    title: 'Watering Guide: When and How to Water Your Plants',
    shortDescription:
      'Correct watering is essential for plant health. This guide explores when and how to water your plants for optimal growth.',
  },
  {
    image: Nature.src,
    title: 'Pruning 101: Keeping Your Plants in Shape',
    shortDescription:
      'Pruning your plants can encourage better growth and flowering. Learn the basics of pruning in this helpful blog post.',
  },
];

const IndexPage: NextPage = (): React.ReactElement => {
  const renderContent = useCallback(() => {
    return (
      <HomeContent
        gardenersList={gardenersList}
        fruitList={productsList}
        blogPosts={blogPosts}
        treeList={productsList}
      />
    );
  }, []);
  return renderContent();
};

export default IndexPage;
