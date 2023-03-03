import { useLocation } from 'react-router-dom';
import { FormCalculate } from '../../components';
import { Fruit } from '../../types';
import { CalculateContainer } from './Calculate.styled';

const Calculate = () => {
  const { state: fruit }: { state: Fruit } = useLocation();

  return (
    <CalculateContainer>
      <FormCalculate formFieldsValue={fruit} />
    </CalculateContainer>
  );
};

export default Calculate;
