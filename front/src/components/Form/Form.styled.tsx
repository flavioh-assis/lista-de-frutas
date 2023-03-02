import styled from 'styled-components';

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

  background: #ddd;
  box-shadow: 0px 4px 10px -5px rgba(0, 0, 0, 0.75);
  border-radius: 6px;
  padding: 1rem;
  width: 100%;

  @media (min-width: 700px) {
    ${Form}, ${InputWrapper} {
      flex-direction: row;
      align-items: flex-end;
    }
  }
`;

export const Title = styled.h1`
  font-size: 16pt;
  font-weight: normal;
`;
