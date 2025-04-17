import React from 'react';
import Description from './Description';
import Title from './Title';
import SubTitle from './SubTitle';
import styled from 'styled-components';
import BaseOverlay from '../../styles/baseOverlay';
export default function Header() {
  return (
    <Styled.Container>
      <Description />
      <Title />
      <SubTitle />
    </Styled.Container>
  );
}

const Styled = {
  Container: styled(BaseOverlay)`
    top: 2em;
  `,
};
