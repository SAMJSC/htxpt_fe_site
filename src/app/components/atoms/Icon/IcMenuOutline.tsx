import React from 'react';

import { TIcon } from '@/app/types/common';

const IcMenuOutline = ({ color }: TIcon): React.ReactElement => {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1.33301H13" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M1 6H13" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M1 10.666H13" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default IcMenuOutline;
