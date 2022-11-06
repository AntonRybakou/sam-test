import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { Header, Products, Cart } from 'components';

const AppWrapper = styled.div`
  border: 1px dotted red;
  width: 1280px;
  margin: 20px auto;
  display: grid;
  grid-template-areas:
    'h h h h'
    'p p p c';
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const HeaderWrapper = styled.div`
  grid-area: h;
`;

const ProductsWrapper = styled.div`
  grid-area: p;
`;

const CartWrapper = styled.div`
  grid-area: c;
`;

const App = (): ReactElement => {
  return (
    <AppWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <ProductsWrapper>
        <Products />
      </ProductsWrapper>
      <CartWrapper>
        <Cart />
      </CartWrapper>
    </AppWrapper>
  );
};

export default App;
