type EmotionType = 'Happy' | 'Hope' | 'Love' | 'Peace' | 'Thanks' | 'Brave';
type CountryType = 'KR' | 'JP' | 'CN' | 'US';
type ShapeType = 'soft' | 'spiky';

type PositionType = {
  x: number;
  y: number;
};

type StarPositionType = {
  [key: number]: PositionType;
};

type Star = {
  name: string;
  emotion: EmotionType;
  shape: ShapeType;
  size: number;
  country: CountryType;
  message: string;
  color: string;
};

type StarData = Star & {
  id: number;
  createdAt: string;
  position: PositionType;
  twinkling: boolean;
};

// const example1: Star = {
//   name: '빛_하나',
//   emotion: 'Happy',
//   shape: 'soft',
//   size: 3,
//   country: 'KR',
//   message: '당신 덕분에 오늘 하루를 버텼어요.',
//   color: '#FFD700',
// };

// const example2: Star = {
//   name: '빛_둘',
//   emotion: 'Hope',
//   shape: 'spiky',
//   size: 5,
//   country: 'US',
//   message: '매 순간 당신을 응원해요!',
//   color: '#FFD700',
// };
