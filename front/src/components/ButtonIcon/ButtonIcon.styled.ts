import styled from 'styled-components';
import color from '../../styles/colors';
import resource from '../../styles/resources';

export const ButtonContainer = styled.button`
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: ${resource.cubicBezier};

  width: 100%;
  height: 100%;
  color: ${color.blueDuett};

  :hover {
    background: #fff;
    box-shadow: ${resource.shadow};
  }
`;
