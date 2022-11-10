import { createSlice } from '@reduxjs/toolkit';

import Blaster from 'accets/images/blaster.png';
import GloveImage from 'accets/images/gloves.png';
import LightSaber from 'accets/images/light_saber.png';
import Rocket from 'accets/images/rocket.png';
import SpaceSuit from 'accets/images/space_suit.png';
import Telescope from 'accets/images/telescope.png';
import { ProductsType } from 'components';

const initialState: ProductsType = [
  {
    id: 1,
    title: 'Space Helmet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
    price: 100,
    image:
      'https://www.pngall.com/wp-content/uploads/5/Vector-Astronaut-Helmet-PNG-Download-Image.png',
  },
  {
    id: 2,
    title: 'Space gloves',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
    price: 50,
    image: GloveImage,
  },
  {
    id: 3,
    title: 'Light Saber',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
    price: 990,
    image: LightSaber,
  },
  {
    id: 4,
    title: 'Space suit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
    price: 25000,
    image: SpaceSuit,
  },
  {
    id: 5,
    title: 'Rocket',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
    price: 420000000,
    image: Rocket,
  },
  {
    id: 6,
    title: 'Blaster',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
    price: 1989,
    image: Blaster,
  },
  {
    id: 7,
    title: 'Telescope',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, veritatis!',
    price: 200,
    image: Telescope,
  },
];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
