import styled from 'styled-components';
import { InputWrapper } from '../FormManage/FormManage.styled';

export const FormCalculateContainer = styled.div`
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
    ${InputWrapper} {
      flex-direction: row;
      align-items: flex-end;
    }
  }
`;
