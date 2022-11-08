import React, { ReactElement } from 'react';

import styled from 'styled-components';

export type CartItemPropsType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

const Wrapper = styled.div`
  border: 1px dotted black;
`;

export const CartItem: React.FC<CartItemPropsType> = ({
  // id,
  title,
  price,
  quantity = 0,
}): ReactElement => {
  return (
    <Wrapper>
      <p>{title}</p>
      <p>
        $ {price} x {quantity}
      </p>
      <button>+</button>
      <button>-</button>
    </Wrapper>
  );
};
