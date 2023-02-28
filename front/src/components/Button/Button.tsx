import styled from 'styled-components';

type Props = {
  color?: 'primary' | 'default';
};

const Button = styled.button<Props>`
  background: ${({ color }) => (color === 'primary' ? '#1677ff' : '#fff')};
  box-shadow: ${({ color }) =>
    color === 'primary' ? '0 2px 0 rgb(5 145 255 / 10%)' : '0 2px 0 rgb(0 0 0 / 2%)'};

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

  :hover {
    background: ${({ color }) => (color === 'primary' ? '#4096ff' : '#fff')};
    border-color: #4096ff;
    color: ${({ color }) => (color === 'primary' ? '#fff' : '#4096ff')};
  }
`;

export default Button;

