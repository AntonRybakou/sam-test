import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {},
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct() {},
    removeProduct() {},
    cartCheckout() {},
  },
});

export const { addProduct, removeProduct, cartCheckout } = cartSlice.actions;

export default cartSlice.reducer;
