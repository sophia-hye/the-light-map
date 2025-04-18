import React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
}

export default function SubTitle() {
  return <Styled.SubTitle>Your Lights, Together as a Sky</Styled.SubTitle>;
}

const Styled = {
  SubTitle: styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 0.015em;
    color: rgba(255, 255, 255, 0.9);

    animation-delay: 0.3s, 0.6s, 0.9s;
  `,
};
