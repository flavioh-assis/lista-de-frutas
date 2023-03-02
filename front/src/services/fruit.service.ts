import { useMutation, useQuery } from 'react-query';
import api from './api';
import { Fruit, FruitDTO } from '../types';

const create = async (fruit: FruitDTO) => {
  const { data } = await api.post('fruits', fruit);

  return data as Fruit;
};

const getAll = async () => {
  const { data } = await api.get('fruits');

  return data ? (data as Fruit[]) : [];
};

export const MutationCreate = () => useMutation(create);

export const UseQueryAllFruits = () => {
  return useQuery(['getAll'], () => getAll(), {
    enabled: false,
    retryDelay: 5000,
  });
};
