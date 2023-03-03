import { notification } from 'antd';
import { useEffect, useState } from 'react';
import { FormManage, Modal, Table } from '../../components';
import {
  MutationCreate,
  MutationDelete,
  MutationUpdate,
  UseQueryAllFruits,
} from '../../services/fruit.service';
import { Page as ManageFruitContainer } from '../../styles/shared';
import { Fruit, FruitDTO } from '../../types';

const ManageFruit = () => {
  const [api, contextHolder] = notification.useNotification();

  const [selectedFruit, setSelectedFruit] = useState<Fruit | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idToBeDeleted, setIdToBeDeleted] = useState(0);

  const { mutate: mutateCreate } = MutationCreate();
  const { mutate: mutateUpdate } = MutationUpdate();
  const { mutate: mutateDelete } = MutationDelete();

  const { data, refetch } = UseQueryAllFruits();
  const fruits = data || [];

  const closeModal = () => setIsModalOpen(false);

  const openModal = () => setIsModalOpen(true);

  const resetSelectedFruit = () => setSelectedFruit(undefined);

  const openNotificationDeleteSuccess = () => {
    api.success({
      message: 'Sucesso!',
      description: 'Fruta excluída.',
      placement: 'bottom',
      duration: 3,
    });
  };

  const openNotificationUpdateSuccess = () => {
    api.success({
      message: 'Sucesso!',
      description: 'Fruta atualizada.',
      placement: 'bottom',
      duration: 3,
    });
  };

  const openNotificationAddSuccess = () => {
    api.success({
      message: 'Sucesso!',
      description: 'Fruta adicionada.',
      placement: 'bottom',
      duration: 3,
    });
  };

  const openNotificationError = (error: unknown) => {
    api.error({
      message: 'Erro inesperado!',
      description: `Não foi possível adicionar a fruta. ${error}`,
      placement: 'bottom',
      duration: 3,
    });
  };

  const handleSubmit = async (fruit: Fruit) => {
    return selectedFruit?.id ? updateFruit(fruit) : addNewFruit(fruit);
  };

  const addNewFruit = (fruit: FruitDTO) => {
    return new Promise<void>((resolve, reject) => {
      mutateCreate(fruit, {
        onSuccess: () => {
          openNotificationAddSuccess();
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

  const updateFruit = (fruit: Fruit) => {
    return new Promise<void>((resolve, reject) => {
      mutateUpdate(fruit, {
        onSuccess: () => {
          openNotificationUpdateSuccess();
          resetSelectedFruit();
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

  const handleDelete = async (id: number) => {
    setIdToBeDeleted(id);
    openModal();
  };

  const deleteFruit = () => {
    mutateDelete(idToBeDeleted, {
      onSuccess: () => {
        openNotificationDeleteSuccess();
        resetSelectedFruit();
        setIdToBeDeleted(0);
        closeModal();
        refetch();
      },
      onError: error => {
        openNotificationError(error);
      },
    });
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <ManageFruitContainer>
      {contextHolder}

      <FormManage
        formFieldsValue={selectedFruit}
        onSubmit={handleSubmit}
        resetSelectedFruit={resetSelectedFruit}
      />

      <Table
        fruits={fruits}
        handleDelete={handleDelete}
        setSelectedFruit={setSelectedFruit}
      />

      <Modal
        isOpen={isModalOpen}
        onConfirm={deleteFruit}
        onCancel={closeModal}
      />
    </ManageFruitContainer>
  );
};

export default ManageFruit;
