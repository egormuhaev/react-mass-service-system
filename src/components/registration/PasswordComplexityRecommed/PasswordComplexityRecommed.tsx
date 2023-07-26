import { PasswordComplexityRecommedProps } from './PasswordComplexityRecommed.props';
import styles from './PasswordComplexityRecommed.module.css';
import {
  lowercaseRegex,
  digitRegex,
  uppercaseRegex,
  specialCharRegex,
} from '../../../utils/helpers/validation.helpers';
import cn from 'classnames';

const PasswordComplexityRecommed: React.FC<PasswordComplexityRecommedProps> = ({
  password,
  theme = 'light',
}) => {
  return (
    <>
      {password && (
        <div
          className={cn(styles.recomended, {
            [styles.dark]: theme === 'dark',
          })}
        >
          <div className={cn(styles.item, styles.title)}>
            Рекомендации по составлению пароля:
          </div>
          <div
            className={cn(styles.item, {
              [styles.success]: password.length >= 8,
            })}
          >
            Длинна пароля более 8 символов
          </div>
          <div
            className={cn(styles.item, {
              [styles.success]: lowercaseRegex(password),
            })}
          >
            Символы в нижнем регистре
          </div>
          <div
            className={cn(styles.item, {
              [styles.success]: uppercaseRegex(password),
            })}
          >
            Символы в верхнем регистре
          </div>
          <div
            className={cn(styles.item, {
              [styles.success]: digitRegex(password),
            })}
          >
            Пароль содержит цифры
          </div>
          <div
            className={cn(styles.item, {
              [styles.success]: specialCharRegex(password),
            })}
          >
            Пароль содержит специальние символы
          </div>
        </div>
      )}
    </>
  );
};

export default PasswordComplexityRecommed;
