import { UseFormRegisterReturn } from 'react-hook-form';
import { Input, Wrapper } from './FormInput.styled';

type Props = {
  label: string;
  register: UseFormRegisterReturn;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
};

const FormInput = ({ label, register, type = 'string', disabled = false }: Props) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <Input
        {...register}
        type={type}
        disabled={disabled}
      />
    </Wrapper>
  );
};

export default FormInput;
