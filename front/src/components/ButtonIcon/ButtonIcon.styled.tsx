import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  height: 100%;
  color: #4147ff;

  :hover {
    background: #fff;
    box-shadow: 0px 4px 10px -2px rgba(0, 0, 0, 0.75);
  }
`;
