import styled from 'styled-components';

export const Input = styled.input<{ hasError: boolean }>`
  background-color: #fff;
  border-color: ${({ hasError }) => (hasError ? 'red' : '#d9d9d9')};
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;

  color: #000;
  font-size: 11pt;
  line-height: 22px;

  padding: 4px 11px;
  transition: all 0.2s;
  width: 100%;

  :hover,
  :focus {
    border-color: ${({ hasError }) => (hasError ? 'red' : '#4147ff')};
    outline: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Label = styled.label`
  font-size: 11pt;
  padding-left: 5px;
`;

export const Error = styled.span<{ hasError: boolean }>`
  color: red;
  font-size: 10pt;
  height: 20px;
  padding-left: 5px;
  visibility: ${({ hasError }) => (hasError ? 'visible' : 'hidden')};
`;
