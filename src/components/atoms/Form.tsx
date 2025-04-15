import React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StarData } from './LightMapCanvas';

interface FormData {
  nickname: string;
  lightName: string;
  emotionTags: string;
  color: string;
  location: string;
  message: string;
}

const schema = yup.object().shape({
  nickname: yup.string().required('Enter your nickname'),
  lightName: yup.string().required('Enter your light name'),
  emotionTags: yup.string().required('Select an emotion'),
  color: yup.string().required('Select a color'),
  location: yup.string().required('Select a location'),
  message: yup
    .string()
    .required('Enter your message')
    .max(200, 'Message must be 200 characters or less'),
});

const emotionOptions = ['Happy', 'Hope', 'Love', 'Peace', 'Thanks', 'Brave'];
const locationOptions = ['Korea', 'Japan', 'China', 'USA'];

interface FormProps {
  isOpen: (isOpen: boolean) => void;
  setIsSuccess: (isSuccess: boolean) => void;
}

export default function Form({ isOpen, setIsSuccess }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      emotionTags: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    try {
      // localStorage에서 기존 데이터 가져오기
      const existingDataStr = localStorage.getItem('starData');
      let existingData = [];

      if (existingDataStr) {
        existingData = JSON.parse(existingDataStr);
      }

      // 새로운 데이터 추가
      const newData = {
        ...data,
        id: Date.now(), // 고유 ID 생성
        createdAt: new Date().toISOString(),
        position: { x: Math.random() * 100, y: Math.random() * 100 },
      };

      existingData.push(newData);

      // 위치 정보 저장
      const positions = existingData.reduce(
        (acc: { [key: number]: { x: number; y: number } }, star: StarData) => {
          acc[star.id] = star.position!;
          return acc;
        },
        {}
      );
      localStorage.setItem('starPositions', JSON.stringify(positions));

      // localStorage에 데이터 저장
      localStorage.setItem('starData', JSON.stringify(existingData));

      console.log('Data saved successfully', newData);
      isOpen(false);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error saving data:', error);
      setIsSuccess(false);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Add your star</FormTitle>
      <FormGroup>
        <Label>Nickname</Label>
        <Input type="text" {...register('nickname')} />
        {errors.nickname && <ErrorMessage>{errors.nickname.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label>My Light Name</Label>
        <Input type="text" {...register('lightName')} />
        {errors.lightName && <ErrorMessage>{errors.lightName.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label>Emotion Tag</Label>
        <EmotionGrid>
          {emotionOptions.map(emotion => (
            <EmotionLabel key={emotion}>
              <RadioButton type="radio" value={emotion} {...register('emotionTags')} />
              <EmotionText>{emotion}</EmotionText>
            </EmotionLabel>
          ))}
        </EmotionGrid>
        {errors.emotionTags && <ErrorMessage>{errors.emotionTags.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label>Light Color</Label>
        <ColorInput type="color" {...register('color')} />
        {errors.color && <ErrorMessage>{errors.color.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label>Location</Label>
        <Select {...register('location')}>
          {locationOptions.map(location => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </Select>
        {errors.location && <ErrorMessage>{errors.location.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label>Message</Label>
        <Textarea {...register('message')} rows={4} />
        {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
      </FormGroup>

      <SubmitButton type="submit">Create a star</SubmitButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`;

const Input = styled.input`
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`;

const ColorInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  background: transparent;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 0.375rem;
  }
`;

const Select = styled.select`
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background-color: white;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`;

const Textarea = styled.textarea`
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`;

const EmotionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`;

const EmotionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const RadioButton = styled.input`
  width: 1rem;
  height: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 0.5rem;

  &:checked {
    background-color: #6366f1;
    border-color: #6366f1;
  }
`;

const EmotionText = styled.span`
  font-size: 0.875rem;
  color: #374151;
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1rem;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #4f46e5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`;
