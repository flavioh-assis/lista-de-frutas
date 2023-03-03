import { useMutation, useQuery } from 'react-query';
import api from './api';
import { Fruit, FruitDto } from '../types';

const fruitsUrl = 'fruits';

const createFruit = async (fruit: FruitDto) => {
  return await api.post(fruitsUrl, fruit);
};

const updateFruit = async (fruit: Fruit) => {
  const url = `${fruitsUrl}/${fruit.id}`;

  return await api.put(url, fruit);
};

const getAllFruits = async () => {
  const { data } = await api.get(fruitsUrl);

  return data as Fruit[];
};

const deleteFruit = async (id: number) => {
  const url = `${fruitsUrl}/${id}`;

  return await api.delete(url);
};

export const MutationCreate = () => useMutation(createFruit);

export const MutationUpdate = () => useMutation(updateFruit);

export const MutationDelete = () => useMutation(deleteFruit);

export const UseQueryAllFruits = () => {
  return useQuery(['getAllFruits'], () => getAllFruits(), {
    enabled: false,
    retryDelay: 5000,
    keepPreviousData: true,
  });
};
