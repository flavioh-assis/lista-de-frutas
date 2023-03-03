import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  justify-content: center;
  display: flex;
  height: 100%;
  align-items: center;
  background: transparent;

  border-radius: 4px;
  color: #4147ff;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;

  :hover {
    background: #fff;
    box-shadow: 0px 4px 10px -5px rgba(0, 0, 0, 0.75);
  }
`;
