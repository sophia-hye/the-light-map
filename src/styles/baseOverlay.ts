import styled from 'styled-components';

const BaseOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;

  z-index: 30;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* 부모에서 막고 */
  cursor: default;

  > * {
    pointer-events: auto; /* 자식만 이벤트 받게 */
  }
`;

export default BaseOverlay;
