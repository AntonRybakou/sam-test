import React, { ReactElement } from 'react';

export type CartItemPropsType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

export const CartItem: React.FC<CartItemPropsType> = ({
  // id,
  title,
  price,
  quantity = 0,
}): ReactElement => {
  return (
    <div>
      <p>{title}</p>
      <p>
        $ {price} x {quantity}
      </p>
      <button>+</button>
      <button>-</button>
    </div>
  );
};
