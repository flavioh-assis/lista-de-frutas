import { Button } from '../../components';
import { ButtonWrapper } from '../FormManage/FormManage.styled';
import { ModalContainer, Content, Title } from './Modal.styled';

type Props = {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: VoidFunction;
};

const Modal = ({ isOpen, onConfirm, onCancel }: Props) => {
  return (
    <ModalContainer isOpen={isOpen}>
      <Content>
        <Title>{`Confirma a exclusão da fruta selecionada?`}</Title>

        <ButtonWrapper>
          <Button
            color='primary'
            onClick={() => onConfirm()}
          >
            Confirmar
          </Button>

          <Button onClick={() => onCancel()}>Cancelar</Button>
        </ButtonWrapper>
      </Content>
    </ModalContainer>
  );
};

export default Modal;
