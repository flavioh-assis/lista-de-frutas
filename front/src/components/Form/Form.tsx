import { SubmitHandler, useForm } from 'react-hook-form';
import { Fruit } from '../../types';
import { Button } from '../../components';
import { ButtonWrapper, Form, FormContainer, InputWrapper, Title } from './Form.styled';
import FormInput from '../FormInput/FormInput';

type Props = {
  onSubmit: (fruit: Fruit) => Promise<void>;
};

const FormFruit = ({ onSubmit }: Props) => {
  const { handleSubmit, register, reset } = useForm<Fruit>();

  const handleFormSubmit: SubmitHandler<Fruit> = async fruit => {
    onSubmit(fruit).then(() => {
      reset();
    });
  };

  return (
    <FormContainer>
      <Title>Gerencie suas frutas</Title>

      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputWrapper>
          <FormInput
            label='Descrição'
            register={register('description')}
          />

          <FormInput
            label='Valor A'
            register={register('valueA')}
            type='number'
          />

          <FormInput
            label='Valor B'
            register={register('valueB')}
            type='number'
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button
            type='submit'
            color='primary'
          >
            Salvar
          </Button>

          <Button type='reset'>Limpar</Button>
        </ButtonWrapper>
      </Form>
    </FormContainer>
  );
};

export default FormFruit;
