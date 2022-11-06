import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { Product } from 'components/Products/Product/Product';

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 15px;
`;

export const Products = (): ReactElement => {
  const data = [
    {
      id: 1,
      title: 'Title 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
      price: 50,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7coDbRWUTzE9_XdGdXYcyN27nwoGtwUK4gQ&usqp=CAU',
    },
    {
      id: 2,
      title: 'Title 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
      price: 100,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhRPAraH9HVa-J4KmEkiZlpJgjfpdv8NbBw&usqp=CAU',
    },
    {
      id: 3,
      title: 'Title 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
      price: 100,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhRPAraH9HVa-J4KmEkiZlpJgjfpdv8NbBw&usqp=CAU',
    },
    {
      id: 4,
      title: 'Title 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
      price: 100,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhRPAraH9HVa-J4KmEkiZlpJgjfpdv8NbBw&usqp=CAU',
    },
  ];

  return (
    <Wrapper>
      {data.map(el => {
        return (
          <Product
            key={el.id}
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
