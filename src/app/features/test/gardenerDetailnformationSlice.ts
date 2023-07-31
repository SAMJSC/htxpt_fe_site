import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GardenerDetailTabCode } from '@/app/constants/common';
import { TabBase } from '@/app/types/common';

export const GARDENER_FRUITS_CODE: GardenerDetailTabCode = 'FRUITS';
export const GARDENER_TREES_CODE: GardenerDetailTabCode = 'TREES';

type GardenerDetailInformationState = {
  detaiLInformationTabs: Array<TabBase>;
  activeOrderListTabCode?: TabBase['code'];
};

const initialState: GardenerDetailInformationState = {
  detaiLInformationTabs: [
    {
      label: 'Quả',
      code: GARDENER_FRUITS_CODE,
    },
    {
      label: 'Cây',
      code: GARDENER_TREES_CODE,
    },
  ],
  activeOrderListTabCode: GARDENER_FRUITS_CODE,
};

const activateGardenerDetailTab: CaseReducer<
  GardenerDetailInformationState,
  PayloadAction<TabBase['code']>
> = (state, action) => {
  state.activeOrderListTabCode = action.payload;
};

const gardenerDetailInformationSlice = createSlice({
  name: 'orderAcceptanceAccessibilitySlice',
  initialState,
  reducers: {
    activateGardenerDetailTab,
  },
});

export const gardenerDetailInformationActions = gardenerDetailInformationSlice.actions;

export default gardenerDetailInformationSlice.reducer;
