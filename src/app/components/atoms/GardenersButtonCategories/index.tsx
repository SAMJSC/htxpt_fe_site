import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

import Button from '@/app/components/atoms/Button';
import { GardenerButtonCategoriesContainer } from '@/app/components/atoms/GardenersButtonCategories/styled';
import { GardenerButtons } from '@/app/constants/common';
import { GardenerButtonCategories } from '@/app/types/common';

const GardenerButtonCategories = (): React.ReactElement => {
  const router = useRouter();
  const handleOnButtonClicked = useCallback(
    (code: string) => {
      if (code === 'FAVORITES') {
        router.push(`/gardeners/favorites`);
      } else if (code === 'GARDENERS') {
        router.push(`/gardeners`);
      }
    },
    [router]
  );

  const isButtonActive = (code: string): boolean => {
    const currentPath = router.pathname;
    const expectedRoutes: { [key: string]: string } = {
      FAVORITES: '/gardeners/favorites',
      GARDENERS: '/gardeners',
    };
    return currentPath === expectedRoutes[code];
  };

  return (
    <GardenerButtonCategoriesContainer>
      {GardenerButtons.map((button: GardenerButtonCategories) => (
        <Button
          key={button.code}
          size="lg"
          variant="text"
          shadow
          isActive={isButtonActive(button.code)}
          borderRadius="normal"
          onClick={() => handleOnButtonClicked(button.code)}
        >
          {button.label}
        </Button>
      ))}
    </GardenerButtonCategoriesContainer>
  );
};

export default GardenerButtonCategories;
