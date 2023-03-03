import styled from 'styled-components';
import colors from '../../styles/colors';

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  background: ${colors.lightGrey};
  border-radius: 6px;
  padding: 1rem;
  width: 100%;

  @media (min-width: 700px) {
    ${Form}, ${InputWrapper} {
      flex-direction: row;
    }
  }
`;

export const Title = styled.h1`
  font-size: 16pt;
  font-weight: normal;
`;
