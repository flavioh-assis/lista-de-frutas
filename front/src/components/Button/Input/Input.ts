import styled from 'styled-components';

const Input = styled.input`
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;

  color: #000;
  font-size: 11pt;
  line-height: 22px;

  padding: 4px 11px;
  transition: all 0.2s;
  width: 100%;

  :hover {
    border-color: #4096ff;
  }

  :focus {
    border-color: #4096ff;
    outline: none;
  }
`;

export default Input;

