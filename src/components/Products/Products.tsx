import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { ProductItem, ProductType } from 'components';
import { useAppSelector } from 'store/hooks';

export interface ProductsType extends Array<ProductType> {}

const Wrapper = styled.div`
  grid-area: products;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 10px;
  row-gap: 15px;
  border: 1px solid black;
`;

export const Products = (): ReactElement => {
  const ProductsList = useAppSelector(state => state.products);

  return (
    <Wrapper>
      {ProductsList.map((el: ProductType) => {
        return (
          <ProductItem
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
