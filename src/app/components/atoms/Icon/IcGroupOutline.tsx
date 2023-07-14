import React from 'react';

import { TIcon } from '@/app/types/common';

const IcGroupOutline = ({ size = 24, color }: TIcon): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 3H6C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6V18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H18C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18V6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3ZM12 6C12.1978 6 12.3911 6.05865 12.5556 6.16853C12.72 6.27841 12.8482 6.43459 12.9239 6.61732C12.9996 6.80004 13.0194 7.00111 12.9808 7.19509C12.9422 7.38907 12.847 7.56725 12.7071 7.70711C12.5673 7.84696 12.3891 7.9422 12.1951 7.98079C12.0011 8.01937 11.8 7.99957 11.6173 7.92388C11.4346 7.84819 11.2784 7.72002 11.1685 7.55557C11.0586 7.39112 11 7.19778 11 7C11 6.73478 11.1054 6.48043 11.2929 6.29289C11.4804 6.10536 11.7348 6 12 6ZM8 6C8.19778 6 8.39112 6.05865 8.55557 6.16853C8.72002 6.27841 8.84819 6.43459 8.92388 6.61732C8.99957 6.80004 9.01937 7.00111 8.98079 7.19509C8.9422 7.38907 8.84696 7.56725 8.70711 7.70711C8.56725 7.84696 8.38907 7.9422 8.19509 7.98079C8.00111 8.01937 7.80004 7.99957 7.61732 7.92388C7.43459 7.84819 7.27841 7.72002 7.16853 7.55557C7.05865 7.39112 7 7.19778 7 7C7 6.73478 7.10536 6.48043 7.29289 6.29289C7.48043 6.10536 7.73478 6 8 6ZM19 18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19H6C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18V11H19V18Z"
        fill={color}
      />
    </svg>
  );
};

export default IcGroupOutline;
