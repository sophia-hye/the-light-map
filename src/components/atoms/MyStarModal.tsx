import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface StarData {
  id: number;
  nickname: string;
  lightName: string;
  emotionTags: string;
  color: string;
  location: string;
  message: string;
  createdAt: string;
}

interface MyStarModalProps {
  star: StarData;
  onClose: () => void;
  position: { x: number; y: number };
}

export default function MyStarModal({ star, onClose, position }: MyStarModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [modalPosition, setModalPosition] = useState(() => {
    const modalWidth = 300; // 모달의 기본 너비
    const modalHeight = 200; // 모달의 예상 높이
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let top = position.y;
    let left = position.x;

    // 오른쪽에 공간이 충분한지 확인
    if (position.x + modalWidth > windowWidth) {
      left = position.x - modalWidth - 20;
    } else {
      left = position.x + 20;
    }

    // 아래쪽에 공간이 충분한지 확인
    if (position.y + modalHeight > windowHeight) {
      top = position.y - modalHeight - 20;
    } else {
      top = position.y + 20;
    }

    return { top, left };
  });

  useEffect(() => {
    if (modalRef.current) {
      const modalWidth = modalRef.current.offsetWidth;
      const modalHeight = modalRef.current.offsetHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let top = position.y;
      let left = position.x;

      if (position.x + modalWidth > windowWidth) {
        left = position.x - modalWidth - 20;
      } else {
        left = position.x + 20;
      }

      if (position.y + modalHeight > windowHeight) {
        top = position.y - modalHeight - 20;
      } else {
        top = position.y + 20;
      }

      setModalPosition({ top, left });
    }
  }, [position]);

  return (
    <Style.ModalOverlay onClick={onClose}>
      <Style.ModalContent
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: `${modalPosition.top}px`,
          left: `${modalPosition.left}px`,
        }}
      >
        <Style.CloseButton onClick={onClose}>×</Style.CloseButton>
        <Style.StarInfo>
          <Style.StarColor style={{ backgroundColor: star.color }} />
          <Style.StarDetails>
            <Style.StarName>{star.lightName}</Style.StarName>
            <Style.StarNickname>by {star.nickname}</Style.StarNickname>
            <Style.StarLocation>위치: {star.location}</Style.StarLocation>
            <Style.StarMessage>{star.message}</Style.StarMessage>
            <Style.StarTags>{star.emotionTags}</Style.StarTags>
            <Style.StarDate>{new Date(star.createdAt).toLocaleDateString()}</Style.StarDate>
          </Style.StarDetails>
        </Style.StarInfo>
      </Style.ModalContent>
    </Style.ModalOverlay>
  );
}

const Style = {
  ModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  `,
  ModalContent: styled.div`
    background: linear-gradient(to bottom, #1a1a2e, #16213e);
    padding: 1.5rem;
    border-radius: 0.8rem;
    width: 300px;
    color: white;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  `,
  CloseButton: styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
      color: #ff6b6b;
    }
  `,
  StarInfo: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
  `,
  StarColor: styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 15px currentColor;
  `,
  StarDetails: styled.div`
    flex: 1;
  `,
  StarName: styled.h2`
    margin: 0;
    font-size: 1.2rem;
    color: #ffd700;
  `,
  StarNickname: styled.p`
    margin: 0.3rem 0;
    font-size: 0.9rem;
    color: #a0a0a0;
  `,
  StarLocation: styled.p`
    margin: 0.3rem 0;
    font-size: 0.9rem;
    color: #4dabf7;
  `,
  StarMessage: styled.p`
    margin: 0.8rem 0;
    font-size: 0.9rem;
    line-height: 1.4;
  `,
  StarTags: styled.p`
    margin: 0.3rem 0;
    font-size: 0.9rem;
    color: #ff6b6b;
  `,
  StarDate: styled.p`
    margin: 0.3rem 0;
    font-size: 0.8rem;
    color: #a0a0a0;
  `,
};
