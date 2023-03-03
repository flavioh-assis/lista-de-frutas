import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Fruit, FruitDTO } from '../../types';
import { Button, FormInput } from '../../components';
import { ButtonWrapper, Form, InputWrapper, Title } from '../Form/Form.styled';
import { FormCalculateContainer } from './FormCalculate.styled';
import { useNavigate } from 'react-router-dom';

type Props = {
  formFieldsValue: Fruit;
};

type FormValues = FruitDTO & {
  result: number;
};

const FormCalculate = ({ formFieldsValue }: Props) => {
  const { register, setValue, getValues, resetField } = useForm<FormValues>();
  const nav = useNavigate();

  const setValues = (fruit: FruitDTO) => {
    setValue('description', fruit.description);
    setValue('valueA', fruit.valueA);
    setValue('valueB', fruit.valueB);
  };

  const handleDivide = () => {
    const valueA = getValues('valueA');
    const valueB = getValues('valueB');

    if (valueB === 0) {
      resetField('result');
      alert('Não é possível dividir por zero.');
      return;
    }

    const result = valueA / valueB;
    setValue('result', result);
  };

  const handleMultiple = () => {
    const valueA = getValues('valueA');
    const valueB = getValues('valueB');

    const result = valueA * valueB;
    setValue('result', result);
  };

  const handleBack = () => nav(-1);

  useEffect(() => {
    setValues(formFieldsValue);
  }, [formFieldsValue]);

  return (
    <FormCalculateContainer>
      <Title>Calcule os valores</Title>

      <Form>
        <InputWrapper>
          <FormInput
            label='Descrição'
            register={register('description')}
            disabled
          />

          <FormInput
            label='Valor A'
            register={register('valueA')}
            type='number'
            disabled
          />

          <FormInput
            label='Valor B'
            register={register('valueB')}
            type='number'
            disabled
          />

          <FormInput
            label='Resultado'
            register={register('result')}
            disabled
          />
        </InputWrapper>

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
            onClick={handleMultiple}
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
