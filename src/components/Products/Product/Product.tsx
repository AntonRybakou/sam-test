import React from 'react';

import styled from 'styled-components';

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
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

export const Product: React.FC<ProductType> = ({ title, description, price, image }) => {
  return (
    <ProductWrapper>
      <Image src={image} alt={'product image'} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>$ {price}</p>
      <button>Buy</button>
    </ProductWrapper>
  );
};
