import { useLocation } from 'react-router-dom';
import { FormCalculate } from '../../components';
import { Fruit } from '../../types';
import { Page as PageCalculate } from '../../styles/shared';

const Calculate = () => {
  const { state: fruit }: { state: Fruit } = useLocation();

  return (
    <PageCalculate>
      <FormCalculate formFieldsValue={fruit} />
    </PageCalculate>
  );
};

export default Calculate;
