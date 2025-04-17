import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil';
import { starDataState, selectedStarState, starPositionState } from '../recoil/global';

export default function UserStarCanvas() {
  const starData = useRecoilValue(starDataState);
  const starPositions = useRecoilValue(starPositionState);
  const [_, setSelected] = useRecoilState(selectedStarState);

  const handleStarClick = useCallback((e: React.MouseEvent<HTMLDivElement>, star: StarData) => {
    setSelected(star);
  }, []);

  return (
    <Style.Container>
      {starData.map(star => {
        const position = starPositions[star.id] || { x: 50, y: 50 };

        return (
          <Style.Star
            key={`${new Date().getTime()}-${star.id}`}
            className={star.twinkling ? 'twinkling' : ''}
            style={{
              backgroundColor: star.color,
              left: `${position.x}%`,
              top: `${position.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            onClick={e => handleStarClick(e, star)}
          />
        );
      })}
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    position: fixed;
    z-index: 20;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  `,
  Star: styled.div`
    // 개별 DOM 요소로 별을 구성
    // -> hover, click, tooltip, transform 등 개별 제어 가능
    // -> DOM 노드가 많아지면 퍼포먼스 저하 가능성 (모바일에서는 200개 이상이면 부담)
    // -> 전체 반짝임보다 선택적인 별 효과에 적합
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s ease;
    transform: scale(1);

    &:hover {
      transform: scale(1.5);
    }

    &.twinkling {
      animation: twinkle 1s infinite;
    }

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
