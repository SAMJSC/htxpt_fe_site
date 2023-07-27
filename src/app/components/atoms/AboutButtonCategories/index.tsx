import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

import { AboutButtonCategoriesContainer } from '@/app/components/atoms/AboutButtonCategories/styled';
import Button from '@/app/components/atoms/Button';
import { ABOUT_BUTTON_CONTENT } from '@/app/constants/about';

const AboutButtonCategories = (): React.ReactElement => {
  const router = useRouter();
  const handleOnButtonClicked = useCallback(
    (code: string) => {
      if (code === 'ABOUT') {
        router.push(`/about/htx-phat-thu`);
      } else {
        router.push(`/about/${code.toLowerCase()}`);
      }
    },
    [router]
  );

  return (
    <AboutButtonCategoriesContainer>
      {ABOUT_BUTTON_CONTENT.map((button) => (
        <Button
          key={button.code}
          variant="image"
          size="lg"
          isActive={router.pathname.includes(button.code.toLocaleLowerCase())}
          image={button.image}
          borderRadius="normal"
          onClick={() => handleOnButtonClicked(button.code)}
        >
          {button.label}
        </Button>
      ))}
    </AboutButtonCategoriesContainer>
  );
};

export default AboutButtonCategories;
