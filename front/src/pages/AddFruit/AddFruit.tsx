import { Form, notification } from 'antd';
import { useEffect } from 'react';
import { Button, Input, Table } from '../../components';
import { MutationCreate, UseQueryAllFruits } from '../../services/fruit.service';
import { Page as PageAddFruit } from '../../styles/shared';
import { FruitDTO } from '../../types';

const AddFruit = () => {
  const [formFruit] = Form.useForm<FruitDTO>();
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

  useEffect(() => {
    refetch();
  }, []);

  return (
    <PageAddFruit>
      {contextHolder}

      <Form
        style={{ alignItems: 'flex-end' /* , maxWidth: '70rem' */ }}
        form={formFruit}
        onFinish={newFruit =>
          mutate(newFruit, {
            onSuccess: () => openNotificationSuccess(newFruit),
            onError: error => openNotificationError(error),
          })
        }
        validateMessages={{
          required: 'Campo obrigatório',
        }}
        validateTrigger={false}
        layout='inline'
      >
        <Form.Item
          label='Descrição'
          labelAlign='left'
          labelCol={{ span: 20 }}
          wrapperCol={{ span: 20 }}
          name='description'
          rules={[{ required: true }]}
          style={{ marginInlineEnd: 0 }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Valor A'
          labelAlign='left'
          labelCol={{ span: 20 }}
          wrapperCol={{ span: 20 }}
          name='valueA'
          rules={[{ required: true }]}
          style={{ marginInlineEnd: 0 }}
        >
          <Input type='number' />
        </Form.Item>

        <Form.Item
          label='Valor B'
          labelCol={{ span: 20 }}
          wrapperCol={{ span: 20 }}
          name='valueB'
          labelAlign='left'
          rules={[{ required: true }]}
          style={{ marginInlineEnd: 0 }}
        >
          <Input type='number' />
        </Form.Item>

        <div style={{ display: 'flex', gap: '2rem' }}>
          <Button
            type='submit'
            color='primary'
          >
            Adicionar
          </Button>

          <Button type='reset'>Limpar</Button>
        </div>
      </Form>

      <Table fruits={fruits} />
    </PageAddFruit>
  );
};

export default AddFruit;

