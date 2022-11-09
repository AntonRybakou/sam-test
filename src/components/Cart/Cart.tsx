import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { CartItem, CartItemPropsType } from 'components/Cart/CartItem/CartItem';
import { cartCheckout } from 'store/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

export const Cart = (): ReactElement => {
  const CartList = useAppSelector(state => state.cart.cart);
  const dispatch = useAppDispatch();
  /* const [isModal, setIsModal] = React.useState<boolean>(false);
  const showModal = (): void => {
    setIsModal(!isModal);
  }; */

  const getTotalPrice = (): number => {
    let total = 0;

    CartList.forEach(el => {
      total += el.price * el.quantity;
    });

    return total;
  };

  return (
    <Wrapper>
      <h2>CART</h2>
      {CartList.map((el: CartItemPropsType) => {
        return (
          <CartItem
            key={el.id}
            id={el.id}
            title={el.title}
            description={el.description}
            price={el.price}
            image={el.image}
            quantity={el.quantity}
          />
        );
      })}
      {CartList.length > 0 && (
        <div>
          <p>Total {getTotalPrice()}</p>
          <button onClick={() => dispatch(cartCheckout())}>Checkout</button>
        </div>
      )}
    </Wrapper>
  );
};
