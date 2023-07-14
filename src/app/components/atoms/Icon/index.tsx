import IcBackwardArrow from '@/app/components/atoms/Icon/IcBackwardArrow';
import IcCardCategoryOutline from '@/app/components/atoms/Icon/IcCardCategoryOutline';
import IcCheckedBox from '@/app/components/atoms/Icon/IcCheckedBox';
import IcCubeOutline from '@/app/components/atoms/Icon/IcCubeOutline';
import IcEyeOffOutline from '@/app/components/atoms/Icon/IcEyeOffOutline';
import IcEyeOutline from '@/app/components/atoms/Icon/IcEyeOutline';
import IcFieldError from '@/app/components/atoms/Icon/IcFieldError';
import IcForwardArrow from '@/app/components/atoms/Icon/IcForwardArrow';
import IcGridOutline from '@/app/components/atoms/Icon/IcGridOutline';
import IcBrowserOutline from '@/app/components/atoms/Icon/IcGroupOutline';
import IcHeartFill from '@/app/components/atoms/Icon/IcHeartFill';
import IcHeartOutline from '@/app/components/atoms/Icon/IcHeartOutline';
import IcHomeOutline from '@/app/components/atoms/Icon/IcHomeOutline';
import IcLayerOutline from '@/app/components/atoms/Icon/IcLayerOutline';
import IcLayoutOutline from '@/app/components/atoms/Icon/IcLayoutOutline';
import IcLocationOutline from '@/app/components/atoms/Icon/IcLocationOutline';
import IcMenuOutline from '@/app/components/atoms/Icon/IcMenuOutline';
import IcMessageOutline from '@/app/components/atoms/Icon/IcMessageOutline';
import IcNotificationOutline from '@/app/components/atoms/Icon/IcNotificationOutline';
import IcPhoneOutline from '@/app/components/atoms/Icon/IcPhoneOutline';
import IcSettingOutline from '@/app/components/atoms/Icon/IcSettingOutline';
import IcShareOutline from '@/app/components/atoms/Icon/IcShareOutline';
import IcStart from '@/app/components/atoms/Icon/IcStart';
import IcUnCheckedBox from '@/app/components/atoms/Icon/IcUnCheckedBox';
import IcUserOutline from '@/app/components/atoms/Icon/IcUserOutline';
import { Container } from '@/app/components/atoms/Icon/styled';
import { TIcon } from '@/app/types/common';

export const ICONS = {
  ic_eye_outline: IcEyeOutline,
  ic_eye_off_outline: IcEyeOffOutline,
  ic_field_error: IcFieldError,
  ic_user_outline: IcUserOutline,
  ic_share_outline: IcShareOutline,
  ic_setting_outline: IcSettingOutline,
  ic_notification_outline: IcNotificationOutline,
  ic_message_outline: IcMessageOutline,
  ic_layout_outline: IcLayoutOutline,
  ic_layer_outline: IcLayerOutline,
  ic_heart_fill: IcHeartFill,
  ic_browser_outline: IcBrowserOutline,
  ic_grid_outline: IcGridOutline,
  ic_forward_arrow: IcForwardArrow,
  ic_backward_arrow: IcBackwardArrow,
  ic_cube_outline: IcCubeOutline,
  ic_home_outline: IcHomeOutline,
  ic_menu_outline: IcMenuOutline,
  ic_checked_box: IcCheckedBox,
  ic_unchecked_box: IcUnCheckedBox,
  ic_heart_outline: IcHeartOutline,
  ic_location_outline: IcLocationOutline,
  ic_phone_outline: IcPhoneOutline,
  ic_card_category_outline: IcCardCategoryOutline,
  ic_start: IcStart,
} as const;

const Icon = ({ name, size = 24, color = 'currentColor', ...props }: TIcon) => {
  const IconComponent = ICONS[name];
  return IconComponent ? (
    <Container size={size}>
      <IconComponent name={name} color={color} {...props} />
    </Container>
  ) : (
    <></>
  );
};

export default Icon;
