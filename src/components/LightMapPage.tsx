import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import OpenFormButton from './sticky/OpenFormButton';
// import FormModal from './form/FormModal';
import ToastMessage from './popup/ToastMessage';
import LightMapCanvas from './canvas/UserStarCanvas';
import { useSaveTestData } from './features/useHandleData';
// import { generateRandomStars } from './features/generator';
// import { isOpenState } from './recoil/global';

const twinkle = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
`;

export default function LightMapPage() {
  const [needLoad, setNeedLoad] = useState(true);
  useSaveTestData(1000, needLoad);
  useEffect(() => {
    if (needLoad) setNeedLoad(false);
  }, []);

  return (
    <Style.Container>
      {/* <Style.Stars /> */}
      {/* <Style.TwinklingStars /> */}
      <LightMapCanvas />
      <OpenFormButton />
      {/* {isOpen && <FormModal />} */}
      <ToastMessage />
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #050510, #0a0a1a, #050510);
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:
        radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
  `,
  // Stars: styled.div`
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background-image: ${() => generateRandomStars(100)};
  //   background-size: 100% 100%;
  //   background-repeat: no-repeat;
  // `,
  // TwinklingStars: styled.div`
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background-image: ${() => generateRandomStars(50)};
  //   background-size: 100% 100%;
  //   background-repeat: no-repeat;
  //   animation: ${twinkle} 4s infinite;
  // `,
};
