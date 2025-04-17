import React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
}

export default function Description() {
  return (
    <Styled.Container>
      iNKODE는 아티스트들로 빛나는 것이 아닌, 수많은 팬과 함께 만들어가는 하나의 우주입니다.
    </Styled.Container>
  );
}

const Styled = {
  Container: styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
  `,
};
