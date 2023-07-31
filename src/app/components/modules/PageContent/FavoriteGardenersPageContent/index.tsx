import React, { useCallback, useState } from 'react';

import GardenerCard, { GardenerProps } from '@/app/components/modules/Card/Gardener';
import { FavoriteGardenersPageContentContainer } from '@/app/components/modules/PageContent/FavoriteGardenersPageContent/styled';
import { gardenersList } from '@/app/constants/common';

const FavoriteGardenersPageContent = (): React.ReactElement => {
  const [gardenerLikes, setGardenerLikes] = useState<string[]>([]);

  const handleHeartIconClicked = useCallback(
    (id: string) => {
      const isAlreadyLiked = gardenerLikes.includes(id);

      if (isAlreadyLiked) {
        setGardenerLikes(gardenerLikes.filter((gardenerId: string) => gardenerId !== id));
      } else {
        setGardenerLikes([...gardenerLikes, id]);
      }
    },
    [gardenerLikes]
  );
  return (
    <FavoriteGardenersPageContentContainer>
      {gardenersList.map((gardener: GardenerProps, index: number) => (
        <GardenerCard
          id={gardener.id}
          onHeartIconClick={() => handleHeartIconClicked(gardener.id)}
          key={gardener.gardenerName + index}
          gardenerName={gardener.gardenerName}
          ratingStart={gardener.ratingStart}
          image={gardener.image}
          location={gardener.location}
          phoneNumber={gardener.phoneNumber}
          products={gardener.products}
          isLiked={gardenerLikes.includes(gardener.id)}
        />
      ))}
    </FavoriteGardenersPageContentContainer>
  );
};

export default FavoriteGardenersPageContent;
