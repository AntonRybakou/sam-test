import { createSlice } from '@reduxjs/toolkit';

import { ProductsType } from 'components';

const initialState: ProductsType = [
  {
    id: 1,
    title: 'Space Helmet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
    price: 50,
    image:
      'https://www.pngall.com/wp-content/uploads/5/Vector-Astronaut-Helmet-PNG-Download-Image.png',
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
  {
    id: 5,
    title: 'Title 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
    price: 1000,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhRPAraH9HVa-J4KmEkiZlpJgjfpdv8NbBw&usqp=CAU',
  },
  {
    id: 6,
    title: 'Title 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
    price: 1000,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhRPAraH9HVa-J4KmEkiZlpJgjfpdv8NbBw&usqp=CAU',
  },
  {
    id: 7,
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
