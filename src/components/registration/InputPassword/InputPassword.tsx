import Input from '../../ui/Input/Input';
import { IPrefixPostfix } from '../../ui/Input/Input.props';
import { useCallback } from 'react';
import { InputPasswordProps } from './InputPassword.props';

const InputPassword: React.FC<InputPasswordProps> = ({
  value,
  onInput,
  status,
  complexity,
  theme,
}) => {
  const getInputPostfix = useCallback((): IPrefixPostfix | undefined => {
    if (complexity < 6 && complexity !== 0) {
      return {
        content: 'Легкий',
        appearence: 'error',
      };
    } else if (complexity >= 6 && complexity < 8) {
      return {
        content: 'Нормальный',
        appearence: 'warring',
      };
    } else if (complexity >= 8) {
      return {
        content: 'Сложный',
        appearence: 'success',
      };
    } else return undefined;
  }, [value, complexity]);

  return (
    <>
      <Input
        theme={theme}
        preFix={{ content: 'Пароль', appearence: 'ghost' }}
        value={value}
        postFix={getInputPostfix()}
        onInput={onInput}
        type="password"
      />
    </>
  );
};

export default InputPassword;
