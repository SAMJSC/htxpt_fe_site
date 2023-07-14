import React from 'react';

import { TIcon } from '@/app/types/common';

const IcSettingOutline = ({ color }: TIcon): React.ReactElement => {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.2607 19.7665L16.721 16.614C17.3039 16.2775 17.5947 16.1092 17.8067 15.8738C17.9942 15.6655 18.136 15.4202 18.2227 15.1536C18.3203 14.853 18.3203 14.5172 18.3203 13.8473V7.53311C18.3203 6.8632 18.3203 6.52737 18.2227 6.22681C18.136 5.96025 17.9942 5.71471 17.8067 5.50643C17.5957 5.27204 17.3054 5.10448 16.7276 4.77086L11.2598 1.61402C10.6769 1.27749 10.386 1.10956 10.0762 1.0437C9.80202 0.985432 9.51858 0.985432 9.24443 1.0437C8.93458 1.10956 8.64275 1.27749 8.05986 1.61402L2.59859 4.76709C2.01638 5.10322 1.72551 5.27116 1.51367 5.50643C1.32613 5.71471 1.1845 5.96025 1.09789 6.22681C1 6.52808 1 6.86479 1 7.53785V13.8428C1 14.5159 1 14.8523 1.09789 15.1536C1.1845 15.4202 1.32613 15.6655 1.51367 15.8738C1.72563 16.1092 2.01672 16.2775 2.59961 16.614L8.05986 19.7665C8.64274 20.103 8.93459 20.271 9.24443 20.3369C9.51858 20.3952 9.80202 20.3952 10.0762 20.3369C10.386 20.271 10.6779 20.103 11.2607 19.7665Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66016 10.6902C6.66016 12.347 8.0033 13.6902 9.66016 13.6902C11.317 13.6902 12.6602 12.347 12.6602 10.6902C12.6602 9.03334 11.317 7.69019 9.66016 7.69019C8.0033 7.69019 6.66016 9.03334 6.66016 10.6902Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IcSettingOutline;
