import React from 'react';
import styled from 'styled-components';

interface BackgroundLayerProps {
  children?: React.ReactNode[];
}

export default function BackgroundLayer({ children }: BackgroundLayerProps) {
  const starCount = 1000;
  const twinklingStarCount = 50;

  const generateStar = (animation?: boolean): string => {
    // Create random position of stars for background

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    // const size = animation ? 1 : Math.random() * 2 + 1;
    const size = 1;

    return `radial-gradient(${size}px ${size}px at ${x}% ${y}%, white, transparent)`;
  };

  const backgroundStars = Array.from({ length: starCount })
    .map(_ => generateStar(false))
    .join(', ');
  const twinklingStars = Array.from({ length: twinklingStarCount })
    .map(_ => generateStar(true))
    .join(', ');

  return (
    <Background.Container>
      <Background.Sky>
        {/* 
        별 전체를 하나의 큰 배경 이미지로 반짝이게 함 (정적인 배경 느낌)
        -> 단일 div로 퍼포먼스 좋음
        -> 개별 제어가 어렵고 개별 interaction 불가능
         */}
        <Background.Stars bgImage={backgroundStars} />
        <Background.TwinkleStars bgImage={twinklingStars} />
        <UserData.Container>{children}</UserData.Container>
      </Background.Sky>
    </Background.Container>
  );
}

const Background = {
  Container: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;

    background: linear-gradient(135deg, #050510, #0a0a1a, #050510);

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
  Sky: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  Stars: styled.div<{ bgImage: string }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${({ bgImage }) => bgImage};
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `,
  TwinkleStars: styled.div<{ bgImage: string }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${({ bgImage }) => bgImage};
    background-size: 100% 100%;
    background-repeat: no-repeat;
    animation: twinkle 4s infinite;

    @keyframes twinkle {
      0% {
        opacity: 0.2;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.2;
      }
    }
  `,
};

const UserData = {
  Container: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    pointer-events: auto;
  `,
};
