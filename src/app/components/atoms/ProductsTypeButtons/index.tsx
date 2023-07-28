import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/app/components/atoms/Button';
import { ProductsTypeButtonsContainer } from '@/app/components/atoms/ProductsTypeButtons/styled';
import { ProductsButton } from '@/app/constants/common';
import { ProductsTypeButton } from '@/app/types/common';

const ProductsTypeButtons = (): React.ReactElement => {
  const router = useRouter();
  const handleOnButtonClicked = (code: string) => {
    if (code === 'FRUITS') {
      router.push(`/products/fruits`);
    }
    router.push(`/products/${code.toLowerCase()}`);
  };

  return (
    <ProductsTypeButtonsContainer>
      {ProductsButton.map((button: ProductsTypeButton) => (
        <Button
          key={button.code}
          size="lg"
          variant="text"
          shadow
          borderRadius="normal"
          isActive={router.pathname.includes(button.code.toLocaleLowerCase())}
          onClick={() => handleOnButtonClicked(button.code)}
        >
          {button.label}
        </Button>
      ))}
    </ProductsTypeButtonsContainer>
  );
};

export default ProductsTypeButtons;
