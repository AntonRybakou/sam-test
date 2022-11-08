import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductType } from 'components/Products/ProductItem/ProductItem';
// import { CartItemPropsType } from 'components/Cart/CartItem/CartItem';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct() {},
    cartCheckout() {},
  },
});

export const { addProduct, removeProduct, cartCheckout } = cartSlice.actions;

export default cartSlice.reducer;
