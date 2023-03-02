import { UseFormRegisterReturn } from 'react-hook-form';
import { Input, Wrapper } from './FormInput.styled';

type Props = {
  label: string;
  register: UseFormRegisterReturn;
  type?: React.HTMLInputTypeAttribute;
};

const FormInput = ({ label, register, type = 'string' }: Props) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <Input
        {...register}
        type={type}
      />
    </Wrapper>
  );
};

export default FormInput;
