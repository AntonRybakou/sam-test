import React from 'react';

import styled from 'styled-components';

import { addProduct } from 'store/features/cart/cartSlice';
import { useAppDispatch } from 'store/hooks';

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
};

const ProductWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  max-width: fit-content;
  height: 150px;
`;

export const ProductItem: React.FC<ProductType> = ({
  id,
  title,
  description,
  price,
  image,
}) => {
  const dispatch = useAppDispatch();

  return (
    <ProductWrapper>
      <Image src={image} alt={'product image'} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>$ {price}</p>
      <button
        onClick={() => {
          dispatch(
            addProduct({
              id,
              title,
              image,
              price,
              description,
            }),
          );
        }}
      >
        Buy
      </button>
    </ProductWrapper>
  );
};
