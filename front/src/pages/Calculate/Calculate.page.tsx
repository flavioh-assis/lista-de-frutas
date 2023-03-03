import { useLocation } from 'react-router-dom';
import { FormCalculate } from '../../components';
import { Fruit } from '../../types';
import { Page as CalculateContainer } from '../../styles/shared';

const Calculate = () => {
  const { state: fruit }: { state: Fruit } = useLocation();

  return (
    <CalculateContainer>
      <FormCalculate formFieldsValue={fruit} />
    </CalculateContainer>
  );
};

export default Calculate;
