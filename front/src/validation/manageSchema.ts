import { number, object, ObjectSchema, string } from 'yup';
import { FruitDTO } from '../types';

export const manageSchema: ObjectSchema<FruitDTO> = object().shape({
  description: string().required('Campo obrigatório'),
  valueA: number()
    .typeError('Valor deve ser um número positivo')
    .required('Campo obrigatório')
    .test('is-positive', 'Valor deve ser positivo', value => value >= 0),
  valueB: number()
    .typeError('Valor deve ser um número positivo')
    .required('Campo obrigatório')
    .test('is-positive', 'Valor deve ser positivo', value => value >= 0),
});
