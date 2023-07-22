import Input from '../ui/Input/Input';
import { IPrefixPostfix } from '../../interfaces/props/Input.props';
import { useCallback } from 'react';

export interface InputEmailProps {
  value: string;
  status: boolean;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputEmail: React.FC<InputEmailProps> = ({ value, onInput, status }) => {
  const getInputPostfix = useCallback((): IPrefixPostfix | undefined => {
    if (status) {
      return {
        content: 'TRUE',
        appearence: 'success',
      };
    } else if (!status && value !== '') {
      return {
        content: 'FALSE',
        appearence: 'error',
      };
    } else return undefined;
  }, [value, status]);

  return (
    <>
      <Input
        preFix={{ content: 'Email', appearence: 'ghost' }}
        value={value}
        postFix={getInputPostfix()}
        onInput={onInput}
      />
    </>
  );
};

export default InputEmail;
