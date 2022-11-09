import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { CartItemPropsType } from 'components/Cart/CartItem/CartItem';
import { ProductType } from 'components/Products/ProductItem/ProductItem';

interface initialStateType {
  cart: Array<CartItemPropsType>;
}

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
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const itemInCart = state.cart.find(el => el.id === action.payload);

      if (itemInCart) {
        itemInCart.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const itemInCart = state.cart.find(el => el.id === action.payload);

      if (itemInCart) {
        if (itemInCart.quantity === 1) {
          cartSlice.caseReducers.removeProduct(state, action);
        } else {
          itemInCart.quantity--;
        }
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    cartCheckout() {},
  },
});

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
  cartCheckout,
} = cartSlice.actions;

export default cartSlice.reducer;
