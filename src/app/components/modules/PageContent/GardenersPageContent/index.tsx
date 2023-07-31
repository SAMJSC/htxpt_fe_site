import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

import GardenerCard, { GardenerProps } from '@/app/components/modules/Card/Gardener';
import { GardenersPageContentContainer } from '@/app/components/modules/PageContent/GardenersPageContent/styled';
import { gardenersList } from '@/app/constants/common';

const GardenersPageContent = (): React.ReactElement => {
  const [gardenerLikes, setGardenerLikes] = useState<string[]>([]);
  const router = useRouter();

  const handleGardenerClick = useCallback(
    (id: string) => {
      router.push(`/gardeners/${id}/fruits`);
    },
    [router]
  );

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
    <GardenersPageContentContainer>
      {gardenersList.map((gardener: GardenerProps, index: number) => (
        <GardenerCard
          onClick={() => handleGardenerClick(gardener.id)}
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
    </GardenersPageContentContainer>
  );
};

export default GardenersPageContent;
