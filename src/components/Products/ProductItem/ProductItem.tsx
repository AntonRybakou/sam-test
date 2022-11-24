import React from 'react';

import { Wrapper, Image, Title, Description, Price, BuyButton } from './ProductItemStyle';

import { addProduct } from 'store/features/cart/cartSlice';
import { useAppDispatch } from 'store/hooks';

export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const ProductItem: React.FC<ProductType> = ({
  id,
  title,
  description,
  price,
  image,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Image src={image} alt={'product image'} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>
        <span>$ {price}</span>

        <BuyButton
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
        </BuyButton>
      </Price>
    </Wrapper>
  );
};
