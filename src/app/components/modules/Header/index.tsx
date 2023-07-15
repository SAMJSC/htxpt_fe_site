import { useCallback, useState } from 'react';

import GardenerCard from '@/app/components/atoms/Card/Gardener';
import { Nature } from '~/public/images';

const Header = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleOnHeartIconClicked = useCallback(() => {
    setIsLiked((pre) => !pre);
  }, []);

  return (
    <div>
      Header
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: '12.5px' }}>
        <GardenerCard
          gardenerName="Khanh"
          image={Nature.src}
          location="Thôn Đông Hạ, Đắc Sở"
          phoneNumber="0123456789"
          products={['Cây', 'Quả']}
          ratingStart={4}
          isLiked={isLiked}
          onHeartIconClick={handleOnHeartIconClicked}
        />
      </div>
    </div>
  );
};

export default Header;
