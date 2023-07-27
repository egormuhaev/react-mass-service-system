import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'm',
  appearence = 'ghost',
  icon,
  text,
  ref,
  ...props
}): JSX.Element => {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.s]: size === 's',
          [styles.m]: size === 'm',
          [styles.l]: size === 'l',
        },
        {
          [styles.primary]: appearence === 'primary',
          [styles.ghost]: appearence === 'ghost',
          [styles.error]: appearence === 'error',
          [styles.warring]: appearence === 'warring',
          [styles.success]: appearence === 'success',
        }
      )}
      ref={ref}
      {...props}
    >
      {icon && icon}
      {text && text}
      {children}
    </button>
  );
};

export default Button;
