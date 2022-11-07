import { createSlice } from '@reduxjs/toolkit';

import { ProductsType } from 'components/Products/Products';

const initialState: ProductsType = [
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
    title: 'Title 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
    price: 200,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhRPAraH9HVa-J4KmEkiZlpJgjfpdv8NbBw&usqp=CAU',
  },
  {
    id: 4,
    title: 'Title 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
    price: 1000,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhRPAraH9HVa-J4KmEkiZlpJgjfpdv8NbBw&usqp=CAU',
  },
];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
