import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  currentProduct: null,
  productsRequest: true,
  cityId: null,
};

export const PromocodesSlice = createSlice({
  name: 'promocodes',
  initialState,
  reducers: {
    getProductsAction: (state, { payload }) => {
      state.products = payload;
    },
    setCityIdAction: (state, { payload }) => {
      state.cityId = payload;
    },
    setProductsRequestAction: (state, { payload }) => {
      state.productsRequest = payload;
    },
    setCurrentProductAction: (state, { payload }) => {
      state.currentProduct = payload;
    },
  },
});

const { actions, reducer } = PromocodesSlice;

export const {
  getProductsAction,
  setCityIdAction,
  setProductsRequestAction,
  setCurrentProductAction,
} = actions;

export default reducer;
