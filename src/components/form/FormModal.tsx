import React, { useEffect } from 'react';
import styled from 'styled-components';
import Form from './Form';
import { isOpenState } from '../recoil/global';
import { useRecoilState } from 'recoil';

export default function FormModal() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <Style.Overlay onClick={() => setIsOpen(false)}>
      <Style.Modal onClick={e => e.stopPropagation()}>
        <Style.Scrollbar>
          <Form />
        </Style.Scrollbar>
      </Style.Modal>
    </Style.Overlay>
  );
}

const Style = {
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
  `,
  Modal: styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    width: 50%;
    height: 50%;
  `,
  Scrollbar: styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    padding-right: 2rem;
    &::-webkit-scrollbar-thumb:hover {
      background: #a8a8a8 !important;
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(83, 83, 83, 0.07);
      background-color: #f1f1f1;
    }
    &::-webkit-scrollbar {
      width: 7px;
      background-color: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #c1c1c1;
    }
  `,
};
