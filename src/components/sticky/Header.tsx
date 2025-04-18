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
    top: 1em;

    animation: smooth-fade-in 2.4ms ease-out forwards;
    opacity: 0;

    @keyframes smooth-fade-in {
      0% {
        opacity: 0;
        filter: blur(4px) brightness(0.4);
      }
      40% {
        opacity: 0.4;
        filter: blur(2px) brightness(0.8);
      }
      100% {
        opacity: 1;
        filter: blur(0) brightness(1);
      }
    }
  `,
};
