import React from 'react';

import { IconProps } from '@/app/components/atoms/Icon';

const IcHeartFill = ({ size = 24 }: IconProps): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_718_2140)">
        <g filter="url(#filter0_d_718_2140)">
          <path
            d="M12 7.69334C10 2.9989 3 3.4989 3 9.49893C3 15.499 12 20.4991 12 20.4991C12 20.4991 21 15.499 21 9.49893C21 3.4989 14 2.9989 12 7.69334Z"
            fill="#FF0422"
          />
          <path
            d="M12 7.69334C10 2.9989 3 3.4989 3 9.49893C3 15.499 12 20.4991 12 20.4991C12 20.4991 21 15.499 21 9.49893C21 3.4989 14 2.9989 12 7.69334Z"
            stroke="#FF0422"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_718_2140"
          x="1"
          y="2.53906"
          width="24"
          height="21.9609"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_718_2140" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_718_2140"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_718_2140">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IcHeartFill;
