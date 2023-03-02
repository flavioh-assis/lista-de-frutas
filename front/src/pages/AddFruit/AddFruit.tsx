import { notification } from 'antd';
import { useEffect } from 'react';
import { FormFruit, Table } from '../../components';
import { MutationCreate, UseQueryAllFruits } from '../../services/fruit.service';
import { Page as PageAddFruit } from '../../styles/shared';
import { Fruit, FruitDTO } from '../../types';

const AddFruit = () => {
  const [api, contextHolder] = notification.useNotification();

  const { mutate } = MutationCreate();
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
      message: 'Erro!',
      description: `Não foi possível adicionar a fruta selecionada. ${error}`,
      placement: 'bottom',
      duration: 3,
    });
  };

  const handleSubmit = async (fruit: Fruit) => {
    return new Promise<void>((resolve, rej) => {
      mutate(fruit, {
        onSuccess: () => {
          openNotificationSuccess(fruit);
          refetch();
          resolve();
        },
        onError: error => {
          openNotificationError(error);
          rej();
        },
      });
    });
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <PageAddFruit>
      {contextHolder}

      <FormFruit onSubmit={handleSubmit} />

      <Table fruits={fruits} />
    </PageAddFruit>
  );
};

export default AddFruit;
