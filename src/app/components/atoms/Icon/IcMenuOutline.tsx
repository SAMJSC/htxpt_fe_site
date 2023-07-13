import React from 'react';

import { IconProps } from '@/app/components/atoms/Icon';

const IcMenuOutline = ({ size = 24, color }: IconProps): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 3.33203H14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M2 8H14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M2 12.6641H14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default IcMenuOutline;
