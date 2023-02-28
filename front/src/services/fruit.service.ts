import { useMutation } from 'react-query';
import api from './api';
import { Fruit, FruitDTO } from '../types';

const create = async (fruit: FruitDTO) => {
  const { data } = await api.post('FruitRequests', fruit);

  return data as Fruit;
};

export const MutationCreate = () => useMutation(create);

