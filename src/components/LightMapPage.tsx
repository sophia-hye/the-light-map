import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import OpenFormButton from './atoms/OpenFormButton';

const twinkle = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
`

const generateRandomStars = (count: number) => {
  let stars = '';
  for (let i = 0; i < count; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    stars += `radial-gradient(0.1px 0.1px at ${x}% ${y}%, white 0.1px, transparent 0),`;
  }
  return stars.slice(0, -1);
}

export default function LightMapPage() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Style.Container>
      <Style.Stars />
      <Style.TwinklingStars />
      <OpenFormButton setIsOpen={setIsOpen} />
    </Style.Container>
  )
}

const Style = {
  Container: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #050510, #0a0a1a, #050510);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
  `,
  Stars: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${() => generateRandomStars(100)};
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `,
  TwinklingStars: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${() => generateRandomStars(50)};
    background-size: 100% 100%;
    background-repeat: no-repeat;
    animation: ${twinkle} 4s infinite;
  `
}