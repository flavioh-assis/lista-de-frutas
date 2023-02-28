import { Form, notification } from 'antd';
import { Button, Input } from '../../components';
import { MutationCreate } from '../../services/fruit.service';
import { Page as PageAddFruit } from '../../styles/shared';
import { FruitDTO } from '../../types';

const AddFruit = () => {
  const [formFruit] = Form.useForm<FruitDTO>();
  const [api, contextHolder] = notification.useNotification();

  const { mutate } = MutationCreate();

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

  return (
    <PageAddFruit>
      {contextHolder}

      <Form
        style={{ alignItems: 'flex-end' }}
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
    </PageAddFruit>
  );
};

export default AddFruit;

