import React, { ReactElement, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import ProductType from 'components';
import { Product } from 'components/Products/Product/Product';
import { addProduct } from 'store/cartSlice';

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 15px;
`;

export const Products = (): ReactElement => {
  const ProductsList = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const addToCart = useCallback((id: number) => dispatch(addProduct(id)));
  // const data = [
  //   {
  //     id: 1,
  //     title: 'Title 1',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
  //     price: 50,
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7coDbRWUTzE9_XdGdXYcyN27nwoGtwUK4gQ&usqp=CAU',
  //   },
  //   {
  //     id: 2,
  //     title: 'Title 2',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
  //     price: 100,
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhRPAraH9HVa-J4KmEkiZlpJgjfpdv8NbBw&usqp=CAU',
  //   },
  //   {
  //     id: 3,
  //     title: 'Title 2',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
  //     price: 100,
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhRPAraH9HVa-J4KmEkiZlpJgjfpdv8NbBw&usqp=CAU',
  //   },
  //   {
  //     id: 4,
  //     title: 'Title 2',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
  //     price: 100,
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhRPAraH9HVa-J4KmEkiZlpJgjfpdv8NbBw&usqp=CAU',
  //   },
  // ];

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
            addItem={addToCart}
          />
        );
      })}
    </Wrapper>
  );
};
