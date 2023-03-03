import styled from 'styled-components';
import { InputWrapper } from '../FormManage/FormManage.styled';

export const FormCalculateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  background: #eee;
  border-radius: 6px;
  padding: 1rem;
  width: 100%;

  @media (min-width: 700px) {
    ${InputWrapper} {
      flex-direction: row;
    }
  }
`;
