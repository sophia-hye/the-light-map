import { colors, shapes, countries, emotions } from '../constants/options';

export const generateSize = () => {
  // return Math.floor(Math.random() * 4) + 2;
  const rand = Math.random() * 100;

  if (rand < 90) return 2;
  else if (rand < 98) return 3;
  else return 4;
};

export const generateColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export const generateShape = () => {
  return shapes[Math.floor(Math.random() * shapes.length)];
};

export const generateCountry = () => {
  return countries[Math.floor(Math.random() * countries.length)];
};

export const generateEmotion = () => {
  return emotions[Math.floor(Math.random() * emotions.length)];
};

export const generatePosition = () => {
  return {
    x: Math.random() * 100,
    y: Math.random() * 100,
  };
};

export const generatePositionWithinPadding = (): { x: number; y: number } => {
  const padding: { top: number; bottom: number; left: number; right: number } = {
    top: 150,
    bottom: 70,
    left: 30,
    right: 30,
  };

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const minX = (padding.left / viewportWidth) * 100;
  const maxX = 100 - (padding.right / viewportWidth) * 100;

  const minY = (padding.top / viewportHeight) * 100;
  const maxY = 100 - (padding.bottom / viewportHeight) * 100;

  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;

  return { x, y };
};
