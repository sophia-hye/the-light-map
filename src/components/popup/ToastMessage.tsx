import React from 'react';
import Toast from './Toast';
import { useRecoilState } from 'recoil';
import { submitResultState } from '../recoil/global';

export default function ToastMessage() {
  const [submitResult, setSubmitResult] = useRecoilState(submitResultState);
  switch (submitResult) {
    case 'success':
      return (
        <Toast
          message="✨ 나의 빛이 생성되었습니다!"
          type="success"
          onClose={() => setSubmitResult('none')}
        />
      );
    case 'error':
      return (
        <Toast
          message="❌ 빛 생성에 실패했습니다."
          type="error"
          onClose={() => setSubmitResult('none')}
        />
      );
    default:
      return null;
  }
}
