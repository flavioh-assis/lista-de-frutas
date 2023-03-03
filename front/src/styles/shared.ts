import styled from 'styled-components';
import colors from './colors';
import resources from './resources';

export const Page = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem;

  max-width: 75rem;
  min-height: 100vh;
  margin: auto;
  gap: 5rem;
`;

export const Button = styled.button<{ color?: 'primary' | 'default' }>`
  background: ${({ color }) => (color === 'primary' ? `${colors.blueDuett}` : `${colors.white}`)};

  border-color: ${({ color }) =>
    color === 'primary' ? `${colors.blueDuett}` : `${colors.lightGrey}`};
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;

  color: ${({ color }) => (color === 'primary' ? `${colors.white}` : `${colors.black}`)};
  cursor: pointer;
  font-size: 11pt;
  line-height: 22px;

  min-width: 6rem;
  padding: 4px 15px;
  transition: ${resources.cubicBezier};

  :hover,
  :focus-visible {
    background: ${({ color }) => (color === 'primary' ? `${colors.violet}` : `${colors.white}`)};
    border-color: ${({ color }) =>
      color === 'primary' ? `${colors.violet}` : `${colors.blueDuett}`};
    color: ${({ color }) => (color === 'primary' ? `${colors.white}` : `${colors.blueDuett}`)};
    outline: none;
  }
`;
