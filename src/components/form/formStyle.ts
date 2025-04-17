import { styled } from 'styled-components';

const StyledForm = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
    max-width: 600px;
    margin: 0 auto;
  `,
  FormTitle: styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
    text-align: center;
    margin: 0;
    padding: 0;
  `,
  FormGroup: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,
  Label: styled.label`
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
  `,
  Input: styled.input`
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
  `,
  ColorInput: styled.input`
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
  `,
  Select: styled.select`
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
  `,
  Textarea: styled.textarea`
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
  `,
  EmotionGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  `,
  EmotionLabel: styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  `,
  RadioButton: styled.input`
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
  `,
  EmotionText: styled.span`
    font-size: 0.875rem;
    color: #374151;
  `,
  ErrorMessage: styled.p`
    color: #ef4444;
    font-size: 0.75rem;
    margin-top: 0.25rem;
  `,
  SubmitButton: styled.button`
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
  `,
};

export default StyledForm;
