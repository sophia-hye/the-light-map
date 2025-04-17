import React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
}

export default function Title() {
  return <Styled.Container>From Sparks to Stars</Styled.Container>;
}

const Styled = {
  Container: styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    letter-spacing: -0.01em;
  `,
};
