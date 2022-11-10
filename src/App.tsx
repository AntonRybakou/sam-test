import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { Header, Products, Cart } from 'components';

const AppWrapper = styled.div`
  border: 1px dotted red;
  width: 1280px;
  margin: 20px auto;
  display: grid;
  grid-template-areas:
    'header header header header'
    'products products products cart';
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const App = (): ReactElement => {
  return (
    <AppWrapper>
      <Header />
      <Products />
      <Cart />
    </AppWrapper>
  );
};

export default App;
