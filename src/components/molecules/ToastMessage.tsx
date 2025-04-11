import React from 'react'
import Toast from '../atoms/Toast'

interface ToastMessageProps {
  type: 'success' | 'error'
  onClose: () => void
}

export default function ToastMessage({ type, onClose }: ToastMessageProps) {
  return type === 'success' ? (
    <Toast 
      message="✨ 나의 빛이 생성되었습니다!"
      type="success"
      onClose={onClose}
    />
  ) : (
    <Toast 
      message="❌ 빛 생성에 실패했습니다."
      type="error"
      onClose={onClose}
    />
  )
}
