import { notification } from 'antd';
import { useEffect, useState } from 'react';
import { FormFruit, Table } from '../../components';
import { MutationCreate, MutationUpdate, UseQueryAllFruits } from '../../services/fruit.service';
import { Page as PageAddFruit } from '../../styles/shared';
import { Fruit, FruitDTO } from '../../types';

const AddFruit = () => {
  const [api, contextHolder] = notification.useNotification();

  const initialState: Fruit = {
    id: 0,
    description: '',
    valueA: 0,
    valueB: 0,
  };
  const [selectedFruit, setSelectedFruit] = useState(initialState);

  const { mutate: mutateCreate } = MutationCreate();
  const { mutate: mutateUpdate } = MutationUpdate();
  const { data, refetch } = UseQueryAllFruits();
  const fruits = data || [];

  const openNotificationSuccess = ({ description }: FruitDTO) => {
    api.destroy();
    api.success({
      message: 'Sucesso!',
      description: `${description} foi adicionado(a).`,
      placement: 'bottom',
      duration: 3,
    });
  };

  const openNotificationError = (error: unknown) => {
    api.destroy();
    api.error({
      message: 'Erro inesperado!',
      description: `Não foi possível adicionar a fruta. ${error}`,
      placement: 'bottom',
      duration: 3,
    });
  };

  const createNewFruit = (fruit: FruitDTO) => {
    return new Promise<void>((resolve, reject) => {
      mutateCreate(fruit, {
        onSuccess: () => {
          openNotificationSuccess(fruit);
          refetch();
          resolve();
        },
        onError: error => {
          openNotificationError(error);
          reject();
        },
      });
    });
  };

  const resetSelectedFruit = () => {
    setSelectedFruit(initialState);
  };

  const updateFruit = (fruit: Fruit) => {
    return new Promise<void>((resolve, reject) => {
      mutateUpdate(fruit, {
        onSuccess: () => {
          openNotificationSuccess(fruit);
          refetch();
          resetSelectedFruit();
          resolve();
        },
        onError: error => {
          openNotificationError(error);
          reject();
        },
      });
    });
  };

  const handleSubmit = async (fruit: Fruit) => {
    return selectedFruit.id ? updateFruit(fruit) : createNewFruit(fruit);
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <PageAddFruit>
      {contextHolder}

      <FormFruit
        onSubmit={handleSubmit}
        formFieldsValue={selectedFruit}
      />

      <Table
        fruits={fruits}
        setSelectedFruit={setSelectedFruit}
      />
    </PageAddFruit>
  );
};

export default AddFruit;
