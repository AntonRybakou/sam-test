import React from 'react';

import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { ProductType } from 'components';

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

export const Product: React.FC<ProductType> = ({
  title,
  description,
  price,
  image,
  addItem,
}) => {
  return (
    <ProductWrapper>
      <Image src={image} alt={'product image'} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>$ {price}</p>
      <button onClick={addItem}>Buy</button>
    </ProductWrapper>
  );
};
