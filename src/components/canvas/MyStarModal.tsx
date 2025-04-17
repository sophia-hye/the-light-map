import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { selectedStarState } from '../recoil/global';

export default function MyStarModal() {
  const [selectedStar, setSelectedStar] = useRecoilState(selectedStarState);
  const position: PositionType = selectedStar ? selectedStar.position : { x: 0, y: 0 };

  const modalRef = useRef<HTMLDivElement>(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!selectedStar || !modalRef.current) return;

    const modalWidth = modalRef.current.offsetWidth || 300;
    const modalHeight = modalRef.current.offsetHeight || 200;
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
  }, [selectedStar, position]);

  const handleCloseModal = useCallback(() => {
    setSelectedStar(null);
  }, [setSelectedStar]);

  if (!selectedStar) return null;

  return (
    <Style.ModalOverlay onClick={handleCloseModal}>
      <Style.ModalContent
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: `${modalPosition.top}px`,
          left: `${modalPosition.left}px`,
        }}
      >
        <Style.CloseButton onClick={handleCloseModal}>×</Style.CloseButton>
        <Style.StarInfo>
          <Style.StarColor
            style={{ backgroundColor: selectedStar?.color }}
            shape={selectedStar?.shape}
          />
          <Style.StarDetails>
            <Style.StarName>{selectedStar?.name}</Style.StarName>
            <Style.StarCountry>Country: {selectedStar?.country}</Style.StarCountry>
            <Style.StarMessage>{selectedStar?.message}</Style.StarMessage>
            <Style.StarEmotion>{selectedStar?.emotion}</Style.StarEmotion>
            <Style.StarDate>
              {selectedStar?.createdAt ? new Date(selectedStar.createdAt).toLocaleDateString() : ''}
            </Style.StarDate>
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
    z-index: 50;
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
  StarColor: styled.div<{ shape?: string }>`
    width: 40px;
    height: 40px;
    border-radius: ${props => (props.shape === 'soft' ? '50%' : '0')};
    clip-path: ${props =>
      props.shape === 'spiky'
        ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
        : 'none'};
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
  StarCountry: styled.p`
    margin: 0.3rem 0;
    font-size: 0.9rem;
    color: #4dabf7;
  `,
  StarMessage: styled.p`
    margin: 0.8rem 0;
    font-size: 0.9rem;
    line-height: 1.4;
  `,
  StarEmotion: styled.p`
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
