import { useMutation, useQuery } from 'react-query';
import api from './api';
import { Fruit, FruitDTO } from '../types';

const fruitsUrl = 'fruits';

const createFruit = async (fruit: FruitDTO) => {
  const { data } = await api.post(fruitsUrl, fruit);

  return data as Fruit;
};

const updateFruit = async (fruit: Fruit) => {
  const { data } = await api.put(`${fruitsUrl}/${fruit.id}`, fruit);

  return data as Fruit;
};

const getAllFruits = async () => {
  const { data } = await api.get(fruitsUrl);

  return data as Fruit[];
};

const deleteFruit = async (id: number) => {
  const { data } = await api.delete(`${fruitsUrl}/${id}`);

  return data as Fruit;
};

export const MutationCreate = () => useMutation(createFruit);

export const MutationUpdate = () => useMutation(updateFruit);

export const MutationDelete = () => useMutation(deleteFruit);

export const UseQueryAllFruits = () => {
  return useQuery(['getAllFruits'], () => getAllFruits(), {
    enabled: false,
    retryDelay: 5000,
  });
};
