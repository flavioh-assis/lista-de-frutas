import styled from 'styled-components';

const Button = styled.button<{ color?: 'primary' | 'default' }>`
  background: ${({ color }) => (color === 'primary' ? '#4147ff' : '#fff')};
  box-shadow: 0px 4px 10px -5px rgba(0, 0, 0, 0.75);

  border-color: ${({ color }) => (color === 'primary' ? '#00000000' : '#d9d9d9')};
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;

  color: ${({ color }) => (color === 'primary' ? '#fff' : '#000')};
  cursor: pointer;
  font-size: 11pt;
  line-height: 22px;

  min-width: 6rem;
  padding: 4px 15px;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  :hover,
  :focus-visible {
    background: ${({ color }) => (color === 'primary' ? '#7276fa' : '#fff')};
    border-color: ${({ color }) => (color === 'primary' ? '#7276fa' : '#4147ff')};
    color: ${({ color }) => (color === 'primary' ? '#fff' : '#4147ff')};
    outline: none;
  }
`;

export default Button;
