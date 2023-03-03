import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { ButtonContainer } from './ButtonIcon.styled';

type Props = {
  icon: 'edit' | 'delete';
  onClick: VoidFunction;
};

const ButtonIcon = ({ icon, onClick }: Props) => {
  return (
    <ButtonContainer
      onClick={() => onClick()}
      type='button'
      name={icon}
    >
      {icon === 'edit' ? <FiEdit2 size={20} /> : <FiTrash2 size={20} />}
    </ButtonContainer>
  );
};

export default ButtonIcon;
