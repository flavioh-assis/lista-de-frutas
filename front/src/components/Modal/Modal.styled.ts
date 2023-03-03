import styled from 'styled-components';

export const ModalContainer = styled.dialog<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0 0 0 0;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;

  border-radius: 6px;
  padding: 2rem;
  gap: 3rem;
`;

export const Title = styled.h2`
  font-size: 16pt;
  font-weight: normal;
`;
