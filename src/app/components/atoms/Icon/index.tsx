import React from 'react';

import IcEyeOffOutline from '@/app/components/atoms/Icon/IcEyeOffOutline';
import IcEyeOutline from '@/app/components/atoms/Icon/IcEyeOutline';
import IcFieldError from '@/app/components/atoms/Icon/IcFieldError';

const ICONS = {
  eyeOutline: IcEyeOutline,
  eyeOffOutline: IcEyeOffOutline,
  fieldError: IcFieldError,
};

export interface IconProps {
  name: keyof typeof ICONS;
  color: string;
  size: number;
}

const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  const IconComponent = ICONS[name];
  return <IconComponent name={name} color={color} size={size} />;
};

export default Icon;
