import { Button } from '../../components';
import { ButtonWrapper } from '../Form/Form.styled';
import { ModalContainer, Content, Title } from './Modal.styled';

type Props = {
  fruitDescription: string;
  isOpen: boolean;
};

const Modal = ({ fruitDescription, isOpen }: Props) => {
  return (
    <ModalContainer isOpen={isOpen}>
      <Content>
        <Title>{`Confirma a exclusão de ${fruitDescription}?`}</Title>

        <ButtonWrapper>
          <Button color='primary'>Confirmar</Button>

          <Button>Cancelar</Button>
        </ButtonWrapper>
      </Content>
    </ModalContainer>
  );
};

export default Modal;
