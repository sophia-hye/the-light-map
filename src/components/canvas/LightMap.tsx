import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isOpenState, selectedStarState } from '../recoil/global';
import BackgroundLayer from './BackgroundLayer';
import UserStarCanvas from './UserStarCanvas';
import MyStarModal from './MyStarModal';
import ToastMessage from '../popup/ToastMessage';
import OpenFormButton from '../sticky/OpenFormButton';
import FormModal from '../form/FormModal';
import { useSaveTestData } from '../features/useHandleData';

export default function LightMap() {
  const loadTestDataRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

  const isOpen = useRecoilValue(isOpenState);
  const selectedStar = useRecoilValue(selectedStarState);

  useSaveTestData(1000, !loadTestDataRef.current);

  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setContainerRect(rect);
  }, []);

  return (
    <Style.Container ref={containerRef}>
      <BackgroundLayer>
        <OpenFormButton />
        <UserStarCanvas />
        {isOpen && <FormModal />}
        {selectedStar && containerRect && <MyStarModal containerRect={containerRect} />}
        <ToastMessage />
      </BackgroundLayer>
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  `,
};
