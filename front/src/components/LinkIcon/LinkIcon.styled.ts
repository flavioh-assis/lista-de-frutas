import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../styles/colors';
import resource from '../../styles/resources';

export const StyledLink = styled(Link)`
  justify-content: center;
  display: flex;
  height: 100%;
  align-items: center;
  background: transparent;

  border-radius: 4px;
  color: ${colors.blueDuett};
  cursor: pointer;
  transition: ${resource.cubicBezier};
  width: 100%;

  :hover {
    background: #fff;
    box-shadow: ${resource.shadow};
  }
`;
