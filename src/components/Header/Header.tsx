import React, { ReactElement } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid black;
  grid-area: header;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 75px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
`;

export const Header = (): ReactElement => {
  return (
    <Wrapper>
      <Logo
        src={
          'https://png.pngtree.com/element_our/png/20180917/shopping-logo-design.-shop-template-vector.-png_98547.jpg'
        }
        alt={'logo'}
      />
      <Title>Sam test shop</Title>
    </Wrapper>
  );
};
