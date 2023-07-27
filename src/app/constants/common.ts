import { GardenerProps } from '@/app/components/atoms/Card/Gardener';
import { Nature } from '~/public/images';

export const GARDENER_TITLE = 'Nhà vườn';
export const FRUIT_TITLE = 'Phân Loại Quả';
export const BLOG_TITLE = 'Bài viết mới nhất';
export const TREE_TITLE = 'Phân Loại Quả';
export const EMPTY_PAGE_TEXT = 'Chưa có thông tin';

export const gardenersList: GardenerProps[] = [
  {
    id: 'John Doe-(123) 456-7890',
    image: Nature.src,
    gardenerName: 'John Doe',
    ratingStart: 4,
    location: 'New York',
    phoneNumber: '(123) 456-7890',
    products: ['Roses', 'Tulips', 'Daisies'],
    isLiked: false,
  },
  {
    id: 'Jane Smith-(098) 765-4321',
    image: Nature.src,
    gardenerName: 'Jane Smith',
    ratingStart: 5,
    location: 'Los Angeles',
    phoneNumber: '(098) 765-4321',
    products: ['Orchids', 'Lilies', 'Sunflowers'],
    isLiked: true,
  },
  {
    id: 'Alice Johnson-(111) 222-333',
    image: Nature.src,
    gardenerName: 'Alice Johnson',
    ratingStart: 3,
    location: 'Chicago',
    phoneNumber: '(111) 222-3333',
    products: ['Cacti', 'Succulents', 'Bamboo'],
    isLiked: false,
  },
  {
    id: 'Jane Smith-(098) 765-432',
    image: Nature.src,
    gardenerName: 'Jane Smith',
    ratingStart: 5,
    location: 'Los Angeles',
    phoneNumber: '(098) 765-4321',
    products: ['Orchids', 'Lilies', 'Sunflowers'],
    isLiked: true,
  },
  {
    id: 'Alice Johnson-(111) 222-33',
    image: Nature.src,
    gardenerName: 'Alice Johnson',
    ratingStart: 3,
    location: 'Chicago',
    phoneNumber: '(111) 222-3333',
    products: ['Cacti', 'Succulents', 'Bamboo'],
    isLiked: false,
  },
];
