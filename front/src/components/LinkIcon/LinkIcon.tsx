import { FiExternalLink } from 'react-icons/fi';
import { Fruit } from '../../types';
import { StyledLink } from './LinkIcon.styled';

type Props = {
  path: string;
  fruit: Fruit;
};

const LinkIcon = ({ path, fruit }: Props) => {
  return (
    <StyledLink
      to={{ pathname: path }}
      state={fruit}
    >
      <FiExternalLink size={20} />
    </StyledLink>
  );
};

export default LinkIcon;
