import React, { useEffect } from 'react';
import styled from 'styled-components';

interface ToastProps {
  message: string;
  type: SubmitResultType;
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  if (type === 'none') return null;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return <ToastContainer type={type}>{message}</ToastContainer>;
}

const ToastContainer = styled.div<{ type: 'success' | 'error' }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${props => (props.type === 'success' ? '#4CAF50' : '#F44336')};
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 60;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
