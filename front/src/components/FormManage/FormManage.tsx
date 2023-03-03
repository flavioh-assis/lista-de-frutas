import { SubmitHandler, useForm } from 'react-hook-form';
import { Fruit } from '../../types';
import { Button, InputForm } from '..';
import { ButtonWrapper, Form, FormContainer, InputWrapper, Title } from './FormManage.styled';
import { useEffect } from 'react';
import { manageSchema } from '../../validation/manageSchema';
import { yupResolver } from '@hookform/resolvers/yup';

type Props = {
  formFieldsValue?: Fruit;
  onSubmit: (fruit: Fruit) => Promise<void>;
  resetSelectedFruit: () => void;
};

const FormManage = ({ formFieldsValue, onSubmit, resetSelectedFruit }: Props) => {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Fruit>({
    resolver: yupResolver(manageSchema),
  });

  const handleFormSubmit: SubmitHandler<Fruit> = async fruit => {
    onSubmit(fruit).then(() => {
      reset();
    });
  };

  const setValues = (fruit: Fruit) => {
    setValue('id', fruit.id);
    setValue('description', fruit.description);
    setValue('valueA', fruit.valueA);
    setValue('valueB', fruit.valueB);
  };

  const handleReset = () => {
    resetSelectedFruit();
    reset();
  };

  useEffect(() => {
    reset();
    formFieldsValue && setValues(formFieldsValue);
  }, [formFieldsValue]);

  return (
    <FormContainer>
      <Title>Gerencie suas frutas</Title>

      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputWrapper>
          <InputForm
            label='Descrição'
            register={register('description')}
            error={errors.description?.message}
          />

          <InputForm
            label='Valor A'
            register={register('valueA')}
            error={errors.valueA?.message}
            type='number'
          />

          <InputForm
            label='Valor B'
            register={register('valueB')}
            error={errors.valueB?.message}
            type='number'
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button
            type='submit'
            color='primary'
          >
            {formFieldsValue ? 'Salvar' : 'Adicionar'}
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

export default FormManage;
