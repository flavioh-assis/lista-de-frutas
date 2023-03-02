import styled from 'styled-components';

export const Input = styled.input`
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  box-shadow: 0px 4px 10px -5px rgba(0, 0, 0, 0.75);

  color: #000;
  font-size: 11pt;
  line-height: 22px;

  padding: 4px 11px;
  transition: all 0.2s;
  width: 100%;

  :hover {
    border-color: #4147ff;
  }

  :focus {
    border-color: #4147ff;
    outline: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
