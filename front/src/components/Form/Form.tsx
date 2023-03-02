import { SubmitHandler, useForm } from 'react-hook-form';
import { Fruit } from '../../types';
import { Button, FormInput } from '../../components';
import { ButtonWrapper, Form, FormContainer, InputWrapper, Title } from './Form.styled';
import { useEffect } from 'react';

type Props = {
  formFieldsValue: Fruit;
  onSubmit: (fruit: Fruit) => Promise<void>;
  resetSelectedFruit: () => void;
};

const FormFruit = ({ formFieldsValue, onSubmit, resetSelectedFruit }: Props) => {
  const { handleSubmit, register, reset, setValue } = useForm<Fruit>();

  const handleFormSubmit: SubmitHandler<Fruit> = async fruit => {
    onSubmit(fruit).then(() => {
      reset();
    });
  };

  const setValues = (fruit: Fruit) => {
    setValue('id', fruit.id);
    setValue('description', fruit.description);
    fruit.valueA && setValue('valueA', fruit.valueA);
    fruit.valueB && setValue('valueB', fruit.valueB);
  };

  const handleReset = () => {
    resetSelectedFruit();
    reset();
  };

  useEffect(() => {
    reset();
    setValues(formFieldsValue);
  }, [formFieldsValue]);

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

          <Button
            type='button'
            onClick={() => handleReset()}
          >
            Limpar
          </Button>
        </ButtonWrapper>
      </Form>
    </FormContainer>
  );
};

export default FormFruit;
