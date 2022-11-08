import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CartItemPropsType } from 'components/Cart/CartItem/CartItem';
import { ProductType } from 'components/Products/ProductItem/ProductItem';

type initialStateType = {
  cart: Array<CartItemPropsType>;
};

const initialState: initialStateType = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      const itemInCart = state.cart.find(el => el.id === action.payload.id);

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
