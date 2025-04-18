import React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
}

export default function Description() {
  const message = '“Every spark begins with you — every shine becomes iNKODE.”';

  return <Styled.Message>{message} </Styled.Message>;
}

const Styled = {
  Message: styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.01em;
    color: rgba(255, 255, 255, 0.8);
  `,
};
