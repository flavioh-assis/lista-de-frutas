import { FiExternalLink, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { StyledButton } from './ButtonIcon.styled';

type Props = {
  icon: 'link' | 'edit' | 'delete';
  size?: number;
};

const ButtonIcon = ({ icon, size = 20 }: Props) => {
  const iconComponent = ({ icon, size }: Props) => {
    if (icon === 'link') {
      return <FiExternalLink size={size} />;
    }
    if (icon === 'edit') {
      return <FiEdit2 size={size} />;
    }
    return <FiTrash2 size={size} />;
  };

  return <StyledButton>{iconComponent({ icon, size })}</StyledButton>;
};

export default ButtonIcon;

