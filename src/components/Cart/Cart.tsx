import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { CartItem, CartItemPropsType } from 'components/Cart/CartItem/CartItem';
import { useAppSelector } from 'store/hooks';

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

export const Cart = (): ReactElement => {
  const CartList = useAppSelector(state => state.cart.cart);

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
    </Wrapper>
  );
};
