import React from 'react'
import styled from 'styled-components'

interface OpenFormButtonProps {
  setIsOpen: (isOpen: boolean) => void;
}

export default function OpenFormButton({ setIsOpen }: OpenFormButtonProps) {
  // when clicked, show form to add my star on modal window
  return (
    <Style.Container>
      <Style.Button onClick={() => setIsOpen(true)}>+ My Star</Style.Button>
    </Style.Container>
  )
}

const Style = {
  Container: styled.div`
    /* font-size: 8px; */
  `,
  Button: styled.button`
    position: fixed;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
                0 0 20px rgba(255, 255, 255, 0.3),
                0 0 30px rgba(255, 255, 255, 0.1);
    transition: transform 0.2s, box-shadow 0.3s;
    font-size: 0.35rem;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.7),
                  0 0 25px rgba(255, 255, 255, 0.5),
                  0 0 35px rgba(255, 255, 255, 0.3);
    }
  `
}