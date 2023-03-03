import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Fruit, FruitDTO } from '../../types';
import { Button, InputForm } from '../../components';
import { ButtonWrapper, InputWrapper, Title } from '../FormManage/FormManage.styled';
import { Form, FormCalculateContainer } from './FormCalculate.styled';
import { useNavigate } from 'react-router-dom';
import { Error } from '../InputForm/InputForm.styled';

type Props = {
  formFieldsValue: Fruit;
};

type FormValues = FruitDTO & {
  result: number;
};

const FormCalculate = ({ formFieldsValue }: Props) => {
  const { register, setValue, getValues, resetField } = useForm<FormValues>();
  const [error, setError] = useState('');

  const nav = useNavigate();

  const setFormValues = (fruit: FruitDTO) => {
    setValue('description', fruit.description);
    setValue('valueA', fruit.valueA);
    setValue('valueB', fruit.valueB);
  };

  const handleDivide = () => {
    const valueA = getValues('valueA');
    const valueB = getValues('valueB');

    if (valueB === 0) {
      resetField('result');
      setError('Não é possível dividir por zero');
      return;
    }

    const result = valueA / valueB;
    setValue('result', result);
  };

  const handleMultiply = () => {
    setError('');

    const valueA = getValues('valueA');
    const valueB = getValues('valueB');

    const result = valueA * valueB;
    setValue('result', result);
  };

  const handleBack = () => nav(-1);

  useEffect(() => {
    setFormValues(formFieldsValue);
  }, [formFieldsValue]);

  return (
    <FormCalculateContainer>
      <Title>Calcule os valores</Title>

      <Form>
        <InputWrapper>
          <InputForm
            label='Descrição'
            register={register('description')}
            disabled
          />

          <InputForm
            label='Valor A'
            register={register('valueA')}
            type='number'
            disabled
          />

          <InputForm
            label='Valor B'
            register={register('valueB')}
            type='number'
            disabled
          />

          <InputForm
            label='Resultado'
            register={register('result')}
            disabled
          />
        </InputWrapper>

        <Error hasError={error !== undefined}>{error}</Error>

        <ButtonWrapper>
          <Button
            type='button'
            color='primary'
            onClick={handleDivide}
          >
            Dividir
          </Button>

          <Button
            type='button'
            color='primary'
            onClick={handleMultiply}
          >
            Multiplicar
          </Button>
          <Button
            type='button'
            onClick={handleBack}
          >
            Voltar
          </Button>
        </ButtonWrapper>
      </Form>
    </FormCalculateContainer>
  );
};

export default FormCalculate;
