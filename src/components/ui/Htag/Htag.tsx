import cn from 'classnames';
import styles from './Htag.module.css';
import { HtagProps } from './Htag.props';

const Htag: React.FC<HtagProps> = ({
  children,
  size = 's',
  appearance = 'default',
  className,
  textAlign = 'center',
  theme,
  ...props
}): JSX.Element => {
  return (
    <h1
      className={cn(
        className,
        styles.h,
        {
          [styles.primary]: appearance === 'primary',
          [styles.default]: appearance === 'default',
        },
        {
          [styles.s]: size === 's',
          [styles.m]: size === 'm',
        },
        {
          [styles.center]: textAlign === 'center',
          [styles.right]: textAlign === 'right',
          [styles.left]: textAlign === 'left',
        },
        {
          [styles.dark]: theme === 'dark',
        }
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Htag;
