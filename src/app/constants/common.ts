import { GardenerProps } from '@/app/components/atoms/Card/Gardener';
import { ProductCardProps } from '@/app/components/atoms/Card/Product';
import {
  FRUITS_TYPE,
  FruitsCheckBoxType,
  GARDENER_CATEGORIES,
  GardenerButtonCategories,
  PRODUCT_TYPE,
  ProductsTypeButton,
} from '@/app/types/common';
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

export const GardenerButtons: GardenerButtonCategories[] = [
  {
    code: 'GARDENERS',
    label: GARDENER_CATEGORIES['GARDENERS'],
  },
  {
    code: 'FAVORITES',
    label: GARDENER_CATEGORIES['FAVORITES'],
  },
];

export const ProductsButton: ProductsTypeButton[] = [
  {
    code: 'FRUITS',
    label: PRODUCT_TYPE['FRUITS'],
  },
  {
    code: 'TREES',
    label: PRODUCT_TYPE['TREES'],
  },
];

export const FruitsCheckBox: FruitsCheckBoxType[] = [
  {
    code: 'TYPE-1',
    label: FRUITS_TYPE['TYPE-1'],
  },
  {
    code: 'TYPE-2',
    label: FRUITS_TYPE['TYPE-2'],
  },
  {
    code: 'TYPE-3',
    label: FRUITS_TYPE['TYPE-3'],
  },
  {
    code: 'TYPE-4',
    label: FRUITS_TYPE['TYPE-4'],
  },
  {
    code: 'TYPE-5',
    label: FRUITS_TYPE['TYPE-5'],
  },
  {
    code: 'TYPE-6',
    label: FRUITS_TYPE['TYPE-6'],
  },
  {
    code: 'SPECIAL',
    label: FRUITS_TYPE['SPECIAL'],
  },
];

export const productsList: ProductCardProps[] = [
  {
    image: Nature.src,
    title: 'Beautiful Roses',
    gardener: 'John Doe',
    status: 'AVAILABLE',
  },
  {
    image: Nature.src,
    title: 'Tulips Bouquet',
    gardener: 'Jane Smith',
    status: 'OUT_OF_STOCK',
  },
  {
    image: Nature.src,
    title: 'Daisies Bundle',
    gardener: 'Alice Johnson',
    status: 'COMING_SOON',
  },
  {
    image: Nature.src,
    title: 'Orchids Collection',
    gardener: 'Robert Brown',
    status: 'AVAILABLE',
  },
];
