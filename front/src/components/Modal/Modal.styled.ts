import styled from 'styled-components';
import colors from '../../styles/colors';

export const ModalContainer = styled.dialog<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${colors.bgModal};
  position: fixed;
  inset: 0 0 0 0;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.white};

  border-radius: 6px;
  padding: 2rem;
  gap: 3rem;
`;

export const Title = styled.h2`
  font-size: 16pt;
  font-weight: normal;
`;
