import styled from 'styled-components';
import color from '../../styles/colors';
import resource from '../../styles/resources';

export const Input = styled.input<{ disabled: boolean; hasError: boolean }>`
  background-color: ${color.white};
  font-size: 11pt;
  line-height: 22px;

  border-radius: 6px;
  border-color: ${({ hasError }) => (hasError ? `${color.error}` : `${color.grey}`)};
  border-style: solid;
  border-width: 1px;

  padding: 4px 11px;
  transition: ${resource.cubicBezier};
  width: 100%;

  :hover,
  :focus {
    border-color: ${({ disabled, hasError }) => {
      if (disabled) return `${color.grey}`;

      return hasError ? `${color.error}` : `${color.blueDuett}`;
    }};
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
