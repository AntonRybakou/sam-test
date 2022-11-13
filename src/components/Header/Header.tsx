import React, { ReactElement } from 'react';

import { Wrapper, Logo, Title } from './HeaderStyle';

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
