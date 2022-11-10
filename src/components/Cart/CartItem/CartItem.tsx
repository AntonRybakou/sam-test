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
  margin: 20px auto;
  display: flex;
  padding: 10px;
  flex-direction: column;
  border-radius: 15px;
  transition: all 0.6s ease;

  :hover {
    box-shadow: -7px -7px 15px 0 rgba(255, 255, 255, 0.7),
      7px 7px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
`;

const Price = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;
  opacity: 0.9;
`;

const Quantity = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
`;

const QuantityButtons = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: #14B82E;
  color: white;

  :hover {
    color: yellow;
  }

  :active {
    transform: scale(0.98);
    border-radius: 30px;
    background: #14B82E;
    box-shadow: inset 2px 2px 4px #0a5c17,
      inset -2px -2px 4px #1eff45;
`;

const RemoveButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: 0;
  padding: 10px;
  width: fit-content;
  border: none;
  border-radius: 30px;
  background-color: rgba(229, 55, 37, 0.5);
  color: white;

  :hover {
    background-color: rgba(229, 55, 37, 255);
  }

  :active {
    transform: scale(0.98);
    background: #e53725;
    box-shadow: inset 10px 10px 20px #751c13,
      inset -10px -10px 20px #ff5237;
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
      <Title>{title}</Title>
      <Price>
        ${price}
        <Quantity>
          <QuantityButtons onClick={() => dispatch(incrementQuantity(id))}>
            +
          </QuantityButtons>
          {quantity}
          <QuantityButtons onClick={() => dispatch(decrementQuantity(id))}>
            -
          </QuantityButtons>
        </Quantity>
      </Price>

      <RemoveButton onClick={() => dispatch(removeProduct(id))}>Remove</RemoveButton>
    </Wrapper>
  );
};
