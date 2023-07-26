import Input from '../../ui/Input/Input';
import { IPrefixPostfix } from '../../ui/Input/Input.props';
import { useCallback } from 'react';
import { InputEmailProps } from './InputEmail.props';

const InputEmail: React.FC<InputEmailProps> = ({
  value,
  onInput,
  status,
  theme,
}) => {
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
        theme={theme}
        preFix={{ content: 'Email', appearence: 'ghost' }}
        value={value}
        postFix={getInputPostfix()}
        onInput={onInput}
      />
    </>
  );
};

export default InputEmail;
