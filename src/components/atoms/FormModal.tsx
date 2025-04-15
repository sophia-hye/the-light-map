import React, { useEffect } from 'react';
import styled from 'styled-components';
import Form from './Form';

interface FormModalProps {
  isOpen: (isOpen: boolean) => void;
  setIsSuccess: (isSuccess: boolean) => void;
}

export default function FormModal({ isOpen, setIsSuccess }: FormModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        isOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <Style.Overlay onClick={() => isOpen(false)}>
      <Style.Modal onClick={e => e.stopPropagation()}>
        <Style.Scrollbar>
          <Form isOpen={isOpen} setIsSuccess={setIsSuccess} />
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
    z-index: 1000;
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
