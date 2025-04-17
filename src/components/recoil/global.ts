import { atom } from 'recoil';

export const starDataState = atom<StarData[]>({
  key: 'starData',
  default: [],
});

export const starPositionState = atom<StarPositionType>({
  key: 'starPosition',
  default: {},
});

export const starIdState = atom<number[]>({
  key: 'starId',
  default: [],
});

export const selectedStarState = atom<StarData | null>({
  key: 'selectedStar',
  default: null,
});

export const submitResultState = atom<SubmitResultType>({
  key: 'submitResult',
  default: 'none',
});

export const isOpenState = atom<boolean>({
  key: 'isOpen',
  default: false,
});
