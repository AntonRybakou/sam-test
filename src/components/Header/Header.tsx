import React, { ReactElement } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  grid-area: header;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
  width: 100px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 900;
`;

export const Header = (): ReactElement => {
  return (
    <Wrapper>
      <Logo
        src={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png'
        }
        alt={'logo'}
      />
      <Title>Sam-test shop</Title>
    </Wrapper>
  );
};
