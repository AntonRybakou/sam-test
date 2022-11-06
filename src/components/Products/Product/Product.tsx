import React, { ReactElement } from 'react';

export type ProductPropsType = {
  title: string;
  description: string;
  price: number;
  image: string;
};

export const Product: React.FC<ProductPropsType> = ({
  title,
  description,
  price,
  image,
}): ReactElement => {
  return (
    <div>
      <img src={image} alt={'product image'} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button></button>
    </div>
  );
};
