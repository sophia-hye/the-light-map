import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isOpenState } from '../recoil/global';

export default function OpenFormButton() {
  // when clicked, show form to add my star on modal window
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  return (
    <Style.Container>
      <Style.Button
        onClick={() =>
          setIsOpen(prev => {
            console.log('Button clicked. prev state=', prev, ' -> ', !prev);
            return !prev;
          })
        }
      >
        + My Star
      </Style.Button>
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    /* 스크롤해도 화면에 고정 */
    position: fixed;
    z-index: 40;
  `,
  Button: styled.button`
    position: fixed;
    top: 2rem;
    right: 2rem;

    aspect-ratio: 1 / 1;
    padding: 0.8em;

    background-color: #000;
    color: #fff;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    box-shadow:
      0 0 10px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.3),
      0 0 30px rgba(255, 255, 255, 0.1);

    transition:
      transform 0.2s,
      box-shadow 0.3s;
    /* rem: html의 font-size (루트 글자 크기) 기준 */

    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: scale(1.05);
      box-shadow:
        0 0 15px rgba(255, 255, 255, 0.7),
        0 0 25px rgba(255, 255, 255, 0.5),
        0 0 35px rgba(255, 255, 255, 0.3);
    }
  `,
};
