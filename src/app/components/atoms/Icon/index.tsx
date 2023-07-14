import IcBackwardArrow from '@/app/components/atoms/Icon/IcBackwardArrow';
import IcCheckedBox from '@/app/components/atoms/Icon/IcCheckedBox';
import IcCheckLine from '@/app/components/atoms/Icon/IcCheckLine';
import IcCubeOutline from '@/app/components/atoms/Icon/IcCubeOutline';
import IcEyeOffOutline from '@/app/components/atoms/Icon/IcEyeOffOutline';
import IcEyeOutline from '@/app/components/atoms/Icon/IcEyeOutline';
import IcFieldError from '@/app/components/atoms/Icon/IcFieldError';
import IcForwardArrow from '@/app/components/atoms/Icon/IcForwardArrow';
import IcGridOutline from '@/app/components/atoms/Icon/IcGridOutline';
import IcGroupOutline from '@/app/components/atoms/Icon/IcGroupOutline';
import IcHeartFill from '@/app/components/atoms/Icon/IcHeartFill';
import IcHomeOutline from '@/app/components/atoms/Icon/IcHomeOutline';
import IcLayerOutline from '@/app/components/atoms/Icon/IcLayerOutline';
import IcLayoutOutline from '@/app/components/atoms/Icon/IcLayoutOutline';
import IcMenuOutline from '@/app/components/atoms/Icon/IcMenuOutline';
import IcMessageOutline from '@/app/components/atoms/Icon/IcMessageOutline';
import IcNotificationOutline from '@/app/components/atoms/Icon/IcNotificationOutline';
import IcSettingOutline from '@/app/components/atoms/Icon/IcSettingOutline';
import IcShareOutline from '@/app/components/atoms/Icon/IcShareOutline';
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
  ic_group_outline: IcGroupOutline,
  ic_grid_outline: IcGridOutline,
  ic_forward_arrow: IcForwardArrow,
  ic_backward_arrow: IcBackwardArrow,
  ic_cube_outline: IcCubeOutline,
  ic_home_outline: IcHomeOutline,
  ic_menu_outline: IcMenuOutline,
  ic_check_line: IcCheckLine,
  ic_checked_box: IcCheckedBox,
  ic_unchecked_box: IcUnCheckedBox,
};

const Icon = ({ name, size, color = 'currentColor', ...props }: TIcon) => {
  const IconComponent = ICONS[name];
  return IconComponent ? (
    <Container size={size}>
      <IconComponent name={name} size={size} color={color} {...props} />
    </Container>
  ) : (
    <></>
  );
};

export default Icon;
