import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { starDataState, starIdState, starPositionState } from './global';

export function useSetStarData() {
  const [, setTotalStarData] = useRecoilState(starDataState);

  return (data: StarData) => {
    setTotalStarData(prev => [...prev, data]);
  };
}

export function useSetStarId() {
  const [, setTotalStarId] = useRecoilState(starIdState);

  return (id: number) => {
    setTotalStarId(prev => [...prev, id]);
  };
}

export function useSetStarPosition() {
  const [, setTotalStarPosition] = useRecoilState(starPositionState);

  return (starXY: StarPositionType) => {
    setTotalStarPosition(prev => ({ ...prev, ...starXY }));
  };
}

export function useInitializeTestStars(testDataList: StarData[], needInit: boolean) {
  const setStarData = useSetStarData();
  const setStarId = useSetStarId();
  const setStarPosition = useSetStarPosition();

  useEffect(() => {
    if (!needInit || !testDataList || testDataList.length === 0) return;

    testDataList.forEach(data => {
      setStarData(data);
      setStarId(data.id);

      const starXY: StarPositionType = {};
      starXY[data.id] = data.position;
      setStarPosition(starXY);
    });
  }, [needInit, testDataList]);
}
