import React, { useEffect } from 'react'
import styled from 'styled-components'

interface FormModalProps {
  onClose: () => void
  children: React.ReactNode
}

export default function FormModal({ onClose, children }: FormModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <Style.Overlay onClick={onClose}>
      <Style.Modal onClick={(e) => e.stopPropagation()}>
        {children}
      </Style.Modal>
    </Style.Overlay>
  )
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
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
  `
}