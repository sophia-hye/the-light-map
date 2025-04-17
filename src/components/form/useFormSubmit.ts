import { SubmitHandler } from 'react-hook-form';
import { generatePosition, generateSize, generateColor } from '../features/generator';
import { useRecoilState } from 'recoil';
import { isOpenState, submitResultState } from '../recoil/global';
import { useSetStarData } from '../recoil/useSetter';

type FormData = Omit<Star, 'size' | 'color'>;

export function useFormSubmit() {
  const [_, setIsOpen] = useRecoilState(isOpenState);
  const [__, setSubmitResult] = useRecoilState(submitResultState);
  const setStarData = useSetStarData();

  const onSubmit: SubmitHandler<FormData> = data => {
    try {
      const newData: StarData = {
        ...data,
        size: generateSize(),
        color: generateColor(),
        id: Date.now(),
        createdAt: new Date().toISOString(),
        position: generatePosition(),
        twinkling: true,
      };

      setStarData(newData);
      console.log('Data saved successfully', newData);

      setIsOpen(false);
      setSubmitResult('success');
    } catch (error) {
      console.error('Error saving data:', error);
      setSubmitResult('error');
    }
  };

  return onSubmit;
}
