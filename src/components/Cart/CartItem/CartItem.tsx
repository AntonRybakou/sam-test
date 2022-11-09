import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { ProductType } from 'components/Products/ProductItem/ProductItem';
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from 'store/features/cart/cartSlice';
import { useAppDispatch } from 'store/hooks';

export interface CartItemPropsType extends ProductType {
  quantity: number;
}

const Wrapper = styled.div`
  border: 1px dotted black;
`;

export const CartItem: React.FC<CartItemPropsType> = ({
  id,
  title,
  price,
  quantity = 0,
}): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <p>{title}</p>
      <p>
        $ {price} x {quantity}
      </p>
      <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
      <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
      <p>
        <button onClick={() => dispatch(removeProduct(id))}>remove</button>
      </p>
    </Wrapper>
  );
};
