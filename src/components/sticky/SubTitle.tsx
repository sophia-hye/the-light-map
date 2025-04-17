import React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
}

export default function SubTitle() {
  return <Styled.Container>Fan Constellation</Styled.Container>;
}

const Styled = {
  Container: styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.01em;
  `,
};
