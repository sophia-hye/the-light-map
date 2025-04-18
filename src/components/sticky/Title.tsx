import React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
}

export default function Title() {
  return (
    <Styled.Title>
      <Styled.Word>from</Styled.Word>
      <Styled.WordGradient>Sparks</Styled.WordGradient>
      <Styled.Word>to</Styled.Word>
      <Styled.WordGradient>Stars</Styled.WordGradient>
    </Styled.Title>
  );
}

const Styled = {
  Title: styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: 0.02em;
    color: #ffffff;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  `,
  Word: styled.span`
    display: inline-block;
    margin-right: 1rem;
  `,
  WordGradient: styled.span`
    display: inline-block;
    margin-right: 1rem;
    text-shadow:
      0 0 5px rgba(255, 140, 0, 0.4),
      0 0 10px rgba(255, 140, 0, 0.3),
      0 0 15px rgba(255, 140, 0, 0.2);
  `,
};
