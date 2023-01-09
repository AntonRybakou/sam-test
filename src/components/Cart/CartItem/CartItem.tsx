import React, { ReactElement } from 'react';

import {
  Wrapper,
  Title,
  Price,
  Quantity,
  QuantityButtons,
  RemoveButton,
} from 'components/Cart/CartItem/CartItem.styled';
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

export const CartItem: React.FC<CartItemPropsType> = ({
  id,
  title,
  price,
  quantity = 0,
}): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Price>
        ${price}
        <Quantity>
          <QuantityButtons onClick={() => dispatch(decrementQuantity(id))}>
            -
          </QuantityButtons>
          {quantity}
          <QuantityButtons onClick={() => dispatch(incrementQuantity(id))}>
            +
          </QuantityButtons>
        </Quantity>
      </Price>

      <RemoveButton onClick={() => dispatch(removeProduct(id))}>Remove</RemoveButton>
    </Wrapper>
  );
};
