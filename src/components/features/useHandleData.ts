import {
  generateColor,
  generateCountry,
  generateEmotion,
  generateShape,
  generateSize,
  generatePosition,
  generatePositionWithinPadding,
} from './generator';
import { useInitializeTestStars } from '../recoil/useSetter';
import { useMemo } from 'react';

const generateTestData = (testCount: number): StarData[] => {
  const testData: StarData[] = [];

  for (let i = 0; i < testCount; i++) {
    testData.push({
      id: Date.now() + i,
      name: `Light${i + 1}`,
      emotion: generateEmotion(),
      shape: generateShape(),
      size: 2, // generateSize(),
      color: generateColor(),
      country: generateCountry(),
      message: `This is a test message ${i + 1}. Let's spread light and hope together!`,
      createdAt: new Date().toISOString(),
      // position: generatePosition(),
      position: generatePositionWithinPadding(),
      twinkling: false,
    });
  }
  return testData;
};

export function useSaveTestData(testCount: number, needInit: boolean) {
  const testData = useMemo(() => generateTestData(testCount), []);
  useInitializeTestStars(testData, needInit); // ✅ 훅은 항상 호출되도록
}
