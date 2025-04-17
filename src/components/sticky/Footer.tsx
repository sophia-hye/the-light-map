import BaseOverlay from '@/styles/baseOverlay';
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0% {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 55px #ff00ff, 0 0 75px #ff00ff;
  }
  50% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00ff, 0 0 70px #ff00ff, 0 0 80px #ff00ff, 0 0 100px #ff00ff, 0 0 150px #ff00ff;
  }
  100% {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 55px #ff00ff, 0 0 75px #ff00ff;
  }
`;

const GlowingText = styled.span<{ shouldGlow: boolean }>`
  animation: ${props => (props.shouldGlow ? glow : 'none')} 2s infinite;
  display: inline-block;
  white-space: pre;
`;

export default function Footer() {
  const [glowingIndices, setGlowingIndices] = useState<number[]>([]);
  const text = '© 2025 My Light. All rights reserved. created by sophia-hye';

  useEffect(() => {
    const updateGlowingIndices = () => {
      const numGlowing = Math.floor(Math.random() * 2) + 2; // 2-3개의 글자
      const newIndices = new Set<number>();

      while (newIndices.size < numGlowing) {
        const randomIndex = Math.floor(Math.random() * text.length);
        if (text[randomIndex] !== ' ') {
          // 공백은 제외
          newIndices.add(randomIndex);
        }
      }

      setGlowingIndices(Array.from(newIndices));
    };

    updateGlowingIndices();
    const interval = setInterval(updateGlowingIndices, 3000);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <FooterContainer>
      <p>
        {text.split('').map((char, index) => (
          <GlowingText key={index} shouldGlow={glowingIndices.includes(index)}>
            {char}
          </GlowingText>
        ))}
      </p>
    </FooterContainer>
  );
}

const FooterContainer = styled(BaseOverlay)`
  bottom: 0;
  padding: 1rem;
  color: #f9fafb;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
`;
