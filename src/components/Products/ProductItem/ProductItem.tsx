import React from 'react';

import styled from 'styled-components';

import { addProduct } from 'store/features/cart/cartSlice';
import { useAppDispatch } from 'store/hooks';

export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  transition: all 0.6s ease;
  background-color: #e8e8e8;

  :hover {
    box-shadow: -7px -7px 15px 0 rgba(255, 255, 255, 0.7),
      7px 7px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 20px;
  font-weight: 800;
`;

const Description = styled.p`
  margin: 0;
  font-size: 16px;
`;

const Price = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;
`;

const BuyButton = styled.button`
  display: inline;
  width: 60px;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 50%;
  background-color: #0b3d91;
  color: white;

  :hover {
    color: #f4412d;
  }

  :active {
    transform: scale(0.98);
    background: #0b3d91;
    box-shadow: inset 10px 10px 25px #061f49,
      inset -10px -10px 25px #115cda;
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
