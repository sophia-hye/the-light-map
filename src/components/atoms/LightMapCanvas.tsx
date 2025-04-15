import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import MyStarModal from './MyStarModal';

export interface StarData {
  id: number;
  nickname: string;
  lightName: string;
  emotionTags: string;
  color: string;
  location: string;
  message: string;
  createdAt: string;
  position?: { x: number; y: number };
}

export default function LightMapCanvas() {
  const [stars, setStars] = useState<StarData[]>([]);
  const [selectedStar, setSelectedStar] = useState<StarData | null>(null);
  const [starPosition, setStarPosition] = useState<{ x: number; y: number } | null>(null);
  const [newStarIds, setNewStarIds] = useState<Set<number>>(new Set());
  const prevStarsRef = useRef<StarData[]>([]);

  const loadStars = () => {
    const savedStars = localStorage.getItem('starData');
    const savedPositions = localStorage.getItem('starPositions');

    if (savedStars) {
      const parsedStars = JSON.parse(savedStars);
      let starsWithPositions = parsedStars;

      // 저장된 위치 정보가 있으면 적용
      const positions = JSON.parse(savedPositions || '{}');
      starsWithPositions = parsedStars.map((star: StarData) => {
        // stored position
        const prevPosition = positions[star.id];
        // random x, y position
        const newPosition = {
          x: Math.random() * 100,
          y: Math.random() * 100,
        };
        return {
          ...star,
          position: prevPosition || newPosition,
        };
      });

      // 새로운 별 찾기
      const currentIds = new Set<number>(starsWithPositions.map((star: StarData) => star.id));
      const prevIds = new Set<number>(prevStarsRef.current.map((star: StarData) => star.id));
      const newIds = new Set<number>(Array.from(currentIds).filter(id => !prevIds.has(id)));

      if (newIds.size > 0) {
        setNewStarIds(newIds);
        // 3초 후에 애니메이션 효과 제거
        setTimeout(() => {
          setNewStarIds(new Set());
        }, 3000);
      }

      prevStarsRef.current = starsWithPositions;

      // 생성된 위치 정보 저장
      const newPositions = starsWithPositions.reduce(
        (acc: { [key: number]: { x: number; y: number } }, star: StarData) => {
          acc[star.id] = star.position!;
          return acc;
        },
        {}
      );
      localStorage.setItem('starPositions', JSON.stringify(newPositions));

      setStars(starsWithPositions);
    }
  };

  useEffect(() => {
    loadStars();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'starData') {
        loadStars();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Style.Container>
      {stars.map(star => (
        <Style.Star
          key={star.id}
          style={{
            backgroundColor: star.color,
            left: `${star.position?.x || 0}%`,
            top: `${star.position?.y || 0}%`,
          }}
          className={newStarIds.has(star.id) ? 'new-star' : ''}
          onClick={e => {
            const rect = e.currentTarget.getBoundingClientRect();
            setStarPosition({
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2,
            });
            setSelectedStar(star);
          }}
        />
      ))}
      {selectedStar && starPosition && (
        <MyStarModal
          star={selectedStar}
          onClose={() => {
            setSelectedStar(null);
            setStarPosition(null);
          }}
          position={starPosition}
        />
      )}
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(to bottom, #000000, #1a1a2e);
    overflow: hidden;
  `,
  Star: styled.div`
    position: absolute;
    cursor: pointer;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    box-shadow: 0 0 15px 2px currentColor;
    animation: twinkle 2s infinite alternate;
    transform: translate(-50%, -50%);
    opacity: 0.8;

    @keyframes twinkle {
      0% {
        opacity: 0.6;
        transform: translate(-50%, -50%) scale(1);
      }
      100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.5);
      }
    }

    &:hover {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.8);
    }

    &.new-star {
      animation: newStarPulse 3s ease-out;
    }

    @keyframes newStarPulse {
      0% {
        transform: translate(-50%, -50%) scale(1);
        box-shadow: 0 0 15px 2px currentColor;
      }
      50% {
        transform: translate(-50%, -50%) scale(3);
        box-shadow: 0 0 30px 10px currentColor;
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
        box-shadow: 0 0 15px 2px currentColor;
      }
    }
  `,
};
