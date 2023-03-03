import { UseFormRegisterReturn } from 'react-hook-form';
import { Error, Input, Label, Wrapper } from './InputForm.styled';

type Props = {
  label: string;
  register: UseFormRegisterReturn;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
  error?: string;
};

const FormInput = ({ label, register, type = 'string', disabled = false, error }: Props) => {
  const hasError = () => {
    return error !== undefined;
  };

  return (
    <Wrapper>
      <Label>{label}</Label>

      <Input
        {...register}
        type={type}
        disabled={disabled}
        hasError={hasError()}
      />

      <Error hasError={hasError()}>{error}</Error>
    </Wrapper>
  );
};

export default FormInput;
