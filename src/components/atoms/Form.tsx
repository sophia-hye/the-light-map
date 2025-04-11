import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormData extends FieldValues {
  nickname: string;
  lightName: string;
  emotionTags: string[];
  color: string;
  location: string;
  message: string;
}

const schema = yup.object().shape({
  nickname: yup.string().required('닉네임을 입력해주세요'),
  lightName: yup.string().required('빛의 이름을 입력해주세요'),
  emotionTags: yup.array().of(yup.string()).min(1, '최소 하나의 감정을 선택해주세요'),
  color: yup.string().required('색상을 선택해주세요'),
  location: yup.string().required('위치를 선택해주세요'),
  message: yup
    .string()
    .required('메시지를 입력해주세요')
    .max(200, '메시지는 200자 이내로 입력해주세요'),
});

const emotionOptions = [
  '행복',
  '슬픔',
  '희망',
  '사랑',
  '평화',
  '감사',
  '용기',
  '기쁨',
];

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      emotionTags: [],
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // TODO: API 호출 및 별 생성 로직 구현
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">닉네임</label>
        <input
          type="text"
          {...register('nickname')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.nickname && (
          <p className="mt-1 text-sm text-red-600">{errors.nickname.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">나의 빛 이름</label>
        <input
          type="text"
          {...register('lightName')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.lightName && (
          <p className="mt-1 text-sm text-red-600">{errors.lightName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">감정 태그</label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {emotionOptions.map((emotion) => (
            <label key={emotion} className="inline-flex items-center">
              <input
                type="checkbox"
                value={emotion}
                {...register('emotionTags')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <span className="ml-2">{emotion}</span>
            </label>
          ))}
        </div>
        {errors.emotionTags && (
          <p className="mt-1 text-sm text-red-600">{errors.emotionTags.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">빛 색상 선택</label>
        <input
          type="color"
          {...register('color')}
          className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.color && (
          <p className="mt-1 text-sm text-red-600">{errors.color.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">위치 선택</label>
        <select
          {...register('location')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">위치를 선택하세요</option>
          <option value="auto">자동 위치 감지</option>
          <option value="manual">수동 선택</option>
        </select>
        {errors.location && (
          <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">메시지</label>
        <textarea
          {...register('message')}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        별 생성하기
      </button>
    </form>
  );
}
