import { ABOUT_CATEGORIES_CODE, AboutCategories, CoreValueContentItem } from '@/app/types/about';
import { GARDENER_CATEGORIES, GardenerButtonCategories } from '@/app/types/common';
import {
  About,
  Commit,
  Fair,
  History,
  Human_Resources,
  Integrity,
  Legal,
  Morality,
  Respect,
  Strategy,
  System,
} from '~/public/images';

export const ABOUT_BUTTON_CONTENT: AboutCategories[] = [
  {
    code: 'US',
    image: About.src,
    label: ABOUT_CATEGORIES_CODE['US'],
  },
  {
    code: 'HISTORY',
    image: History.src,
    label: ABOUT_CATEGORIES_CODE['HISTORY'],
  },
  {
    code: 'STRATEGY',
    image: Strategy.src,
    label: ABOUT_CATEGORIES_CODE['STRATEGY'],
  },
  {
    code: 'SYSTEM',
    image: System.src,
    label: ABOUT_CATEGORIES_CODE['SYSTEM'],
  },
  {
    code: 'HUMAN-RESOURCES',
    image: Human_Resources.src,
    label: ABOUT_CATEGORIES_CODE['HUMAN-RESOURCES'],
  },
  {
    code: 'COMMIT',
    image: Commit.src,
    label: ABOUT_CATEGORIES_CODE['COMMIT'],
  },
];

export const VISION_TITLE_TEXT = 'Tầm nhìn';

export const VISION_CONTENT_TEXT =
  '“Trở thành biểu tượng niêm tin hàng đầu Việt Nam về cây trồng Phật thủ, mang lại tiện ích phục vụ cuộc sống người dân Đắc Sở.”';

export const MISSION_TITLE_TEXT = 'Sứ mệnh';

export const MISSION_CONTENT_TEXT =
  '“Hợp Tác Xã cam kết mang lại cho cộng đồng nguồn thông tin xác thực, sự tiện ích trong việc quản lý, đưa công nghệ đến với mọi người bằng chính sự trân trọng, tình yêu và trách nghiệm với cuộc sống con người và xã hội.”';

export const CORE_VALUE_TITLE_TEXT = 'Giá trị cốt lõi';

export const CORE_VALUE_CONTENT_TEXT =
  '“Trở thành biểu tượng niêm tin hàng đầu Việt Nam về cây trồng Phật thủ, mang lại tiện ích phục vụ cuộc sống người dân Đắc Sở.”';

export const CEO_NAME = 'Nguyễn Văn A';

export const ROLE_NAME = 'Chủ tịch HTX';

export const GENDER = 'Ông';

export const CoreValueItem: CoreValueContentItem[] = [
  {
    image: Integrity.src,
    title: 'CHÍNH TRỰC',
    content: 'Liêm chính, trung thực trong ứng xử và trong tất cả các tiện ích.',
  },
  {
    image: Respect.src,
    title: 'TÔN TRỌNG',
    content:
      'Tôn trọng bản thân, tôn trọng thành viên, tôn trọng HTX, tôn trọng đối tác, hợp tác tỏng sự tôn trọng.',
  },
  {
    image: Fair.src,
    title: 'CÔNG BẰNG',
    content: 'Công bằng với thành viên, khách hàng, nhà cung cấp và các bên liên quan khác.',
  },
  {
    image: Morality.src,
    title: 'ĐẠO ĐỨC',
    content: 'Tôn trọng các tiêu chuẩn đã được thiết lập và hành động một cách đạo đức.',
  },
  {
    image: Legal.src,
    title: 'TUÂN THỦ',
    content: 'Tuân thủ Luật pháp, Bộ Quy Tắc Ứng Xử và các quy chế, chính sách, quy định của HTX.',
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
