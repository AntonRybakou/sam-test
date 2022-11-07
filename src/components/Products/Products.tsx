import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { Product, ProductType } from './Product/Product';

import { useAppSelector } from 'store/hooks';

export type ProductsType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}[];

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 15px;
`;

export const Products = (): ReactElement => {
  const ProductsList = useAppSelector(state => state.products);

  return (
    <Wrapper>
      {ProductsList.map((el: ProductType) => {
        return (
          <Product
            key={el.id}
            id={el.id}
            title={el.title}
            description={el.description}
            price={el.price}
            image={el.image}
          />
        );
      })}
    </Wrapper>
  );
};
