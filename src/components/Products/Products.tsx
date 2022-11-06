import React, { ReactElement } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

export const Products = (): ReactElement => {
  return (
    <Wrapper>
      <div>Products</div>
    </Wrapper>
  );
};
