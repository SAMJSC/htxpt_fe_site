import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalProps = {
  isOpenModal: boolean;
};

const initialState: ModalProps = {
  isOpenModal: false,
};

const setModalState: CaseReducer<ModalProps, PayloadAction<boolean>> = (state, action) => {
  state.isOpenModal = action.payload;
};

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    setModalState,
  },
});

export const testActions = testSlice.actions;

export default testSlice.reducer;
