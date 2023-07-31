import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

import Tabs from '@/app/components/atoms/Tabs';
import GardenerDetailInformation from '@/app/components/modules/GardenerDetailInformation';
import ListProducts from '@/app/components/modules/ListProducts';
import { DetailsGardenerPageContentContainer } from '@/app/components/modules/PageContent/DetailsGardenerPageContent/styled';
import { productsList } from '@/app/constants/common';
import { useDispatch, useSelector } from '@/app/features/store';
import { gardenerDetailInformationActions } from '@/app/features/test/gardenerDetailnformationSlice';
import { TabBase } from '@/app/types/common';
import { CEOAvatar, Nature } from '~/public/images';

type DetailsGardenerPageContentProps = {
  gardenerId: string;
};

const DetailsGardenerPageContent = ({
  gardenerId,
}: DetailsGardenerPageContentProps): React.ReactElement => {
  const dispatch = useDispatch();
  const orderAcceptanceAccessibilityState = useSelector((state) => state.gardenerDetailInformation);
  const router = useRouter();

  const handleTabClick = useCallback(
    (item: TabBase) => {
      dispatch(gardenerDetailInformationActions.activateGardenerDetailTab(item.code));
      router.push(`/gardeners/${gardenerId}/${item.code.toLowerCase()}`);
    },
    [dispatch, gardenerId, router]
  );

  const renderProductList = useCallback(() => {
    switch (orderAcceptanceAccessibilityState.activeOrderListTabCode?.toLocaleLowerCase()) {
      case 'fruits': {
        return <ListProducts listProducts={productsList} />;
      }
      case 'trees': {
        return <ListProducts listProducts={productsList} />;
      }
      default:
        return null;
    }
  }, [orderAcceptanceAccessibilityState.activeOrderListTabCode]);
  return (
    <DetailsGardenerPageContentContainer>
      <GardenerDetailInformation
        avatarImage={CEOAvatar.src}
        backgroundImage={Nature.src}
        fruitsQuantity={1}
        treesQuantity={1}
        gardenerName="gardener name"
        joinedAt={new Date('2001-11-28')}
        ratingQuantity={10}
        products={['cay', 'qua']}
        responseRate={100}
        ratingAverage={1}
      />
      <Tabs
        items={orderAcceptanceAccessibilityState.detaiLInformationTabs}
        activeItemCode={orderAcceptanceAccessibilityState.activeOrderListTabCode}
        onItemClick={handleTabClick}
      />
      {renderProductList()}
    </DetailsGardenerPageContentContainer>
  );
};

export default DetailsGardenerPageContent;
