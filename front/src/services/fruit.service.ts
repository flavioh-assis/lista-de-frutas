import { useMutation, useQuery } from 'react-query';
import api from './api';
import { Fruit, FruitDTO } from '../types';

const fruitsUrl = 'fruits';

const create = async (fruit: FruitDTO) => {
  const { data } = await api.post(fruitsUrl, fruit);

  return data as Fruit;
};

const update = async (fruit: Fruit) => {
  const { data } = await api.put(`${fruitsUrl}/${fruit.id}`, fruit);

  return data as Fruit;
};

const getAll = async () => {
  const { data } = await api.get(fruitsUrl);

  return data as Fruit[];
};

export const MutationCreate = () => useMutation(create);

export const MutationUpdate = () => useMutation(update);

export const UseQueryAllFruits = () => {
  return useQuery(['getAll'], () => getAll(), {
    enabled: false,
    retryDelay: 5000,
  });
};
