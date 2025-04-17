import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import BackgroundLayer from './BackgroundLayer';
import UserStarCanvas from './UserStarCanvas';
import OpenFormButton from '../sticky/OpenFormButton';
import ToastMessage from '../popup/ToastMessage';
import FormModal from '../form/FormModal';
import { isOpenState, starDataState } from '../recoil/global';
import { useRecoilValue } from 'recoil';
import { useSaveTestData } from '../features/useHandleData';

export default function LightMap() {
  const isOpen = useRecoilValue(isOpenState);
  const loadTestDataRef = useRef(false);
  useSaveTestData(1000, !loadTestDataRef.current);

  const [needLoad, setNeedLoad] = useState(true);
  useSaveTestData(100, needLoad);
  useEffect(() => {
    if (needLoad) {
      setNeedLoad(false);
    }
  }, []);

  return (
    <Style.Container>
      <BackgroundLayer>
        <OpenFormButton />
        <UserStarCanvas />
        {isOpen && <FormModal />}
        {/* {selectedStar && <MyStarModal />} */}
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
