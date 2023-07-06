import React, { ReactElement } from 'react';

import { IconProps } from '@/app/components/atoms/Icon';

const IcFieldError = ({ size }: IconProps): ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="10" r="8" fill="#FF0422" />
      <path
        d="M8.89347 5.27273L8.72727 11.3835H7.16761L6.99716 5.27273H8.89347ZM7.94744 14.1108C7.66619 14.1108 7.42472 14.0114 7.22301 13.8125C7.02131 13.6108 6.92188 13.3693 6.92472 13.0881C6.92188 12.8097 7.02131 12.571 7.22301 12.3722C7.42472 12.1733 7.66619 12.0739 7.94744 12.0739C8.21733 12.0739 8.45455 12.1733 8.65909 12.3722C8.86364 12.571 8.96733 12.8097 8.97017 13.0881C8.96733 13.2756 8.91761 13.4474 8.82102 13.6037C8.72727 13.7571 8.60369 13.8807 8.45028 13.9744C8.29688 14.0653 8.12926 14.1108 7.94744 14.1108Z"
        fill="white"
      />
    </svg>
  );
};

export default IcFieldError;
