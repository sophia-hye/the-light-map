import React from 'react';
import StyledForm from './formStyle';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { emotions, countries, shapes } from '../constants/options';
import { useFormSubmit } from './useFormSubmit';

const schema = yup.object().shape({
  name: yup.string().required('Enter your light name'),
  emotion: yup.string().oneOf(emotions).required('Select an emotion') as yup.Schema<EmotionType>,
  shape: yup.string().oneOf(shapes).required('Select a shape') as yup.Schema<ShapeType>,
  country: yup.string().oneOf(countries).required('Select a country') as yup.Schema<CountryType>,
  message: yup
    .string()
    .required('Enter your message')
    .max(100, 'Message must be 100 characters or less'),
});

type FormData = Omit<Star, 'size' | 'color'>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      emotion: 'Happy',
      shape: 'soft',
      country: 'KR',
      message: '',
    },
  });

  const onSubmit = useFormSubmit();

  return (
    <StyledForm.Form onSubmit={handleSubmit(onSubmit)}>
      <StyledForm.FormTitle>Add your star</StyledForm.FormTitle>
      <StyledForm.FormGroup>
        <StyledForm.Label>Light Name</StyledForm.Label>
        <StyledForm.Input type="text" {...register('name')} />
        {errors.name && <StyledForm.ErrorMessage>{errors.name.message}</StyledForm.ErrorMessage>}
      </StyledForm.FormGroup>

      <StyledForm.FormGroup>
        <StyledForm.Label>Emotion</StyledForm.Label>
        <StyledForm.EmotionGrid>
          {emotions.map(emotion => (
            <StyledForm.EmotionLabel key={emotion}>
              <StyledForm.RadioButton type="radio" value={emotion} {...register('emotion')} />
              <StyledForm.EmotionText>{emotion}</StyledForm.EmotionText>
            </StyledForm.EmotionLabel>
          ))}
        </StyledForm.EmotionGrid>
        {errors.emotion && (
          <StyledForm.ErrorMessage>{errors.emotion.message}</StyledForm.ErrorMessage>
        )}
      </StyledForm.FormGroup>

      {/* <FormGroup>
        <Label>Light Color</Label>
        <ColorInput type="color" {...register('color')} />
        {errors.color && <ErrorMessage>{errors.color.message}</ErrorMessage>}
      </FormGroup> */}

      <StyledForm.FormGroup>
        <StyledForm.Label>Shape</StyledForm.Label>
        <StyledForm.Select {...register('shape')}>
          {shapes.map((shape, idx) => (
            <option key={`shape-${idx}`} value={shape}>
              {shape}
            </option>
          ))}
        </StyledForm.Select>
        {errors.shape && <StyledForm.ErrorMessage>{errors.shape.message}</StyledForm.ErrorMessage>}
      </StyledForm.FormGroup>

      <StyledForm.FormGroup>
        <StyledForm.Label>Country</StyledForm.Label>
        <StyledForm.Select {...register('country')}>
          {countries.map((country, idx) => (
            <option key={`country-${idx}`} value={country}>
              {country}
            </option>
          ))}
        </StyledForm.Select>
        {errors.country && (
          <StyledForm.ErrorMessage>{errors.country.message}</StyledForm.ErrorMessage>
        )}
      </StyledForm.FormGroup>

      <StyledForm.FormGroup>
        <StyledForm.Label>Message</StyledForm.Label>
        <StyledForm.Textarea {...register('message')} rows={4} />
        {errors.message && (
          <StyledForm.ErrorMessage>{errors.message.message}</StyledForm.ErrorMessage>
        )}
      </StyledForm.FormGroup>

      <StyledForm.SubmitButton type="submit">Create a star</StyledForm.SubmitButton>
    </StyledForm.Form>
  );
}
