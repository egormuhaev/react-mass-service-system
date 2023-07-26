import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './Input.props';

const Input: React.FC<InputProps> = ({
  children,
  sizeof = 'm',
  preFix,
  postFix,
  style,
  label,
  theme,
  ...props
}): JSX.Element => {
  return (
    <div
      className={cn(
        styles.container,
        {
          [styles.s]: sizeof === 's',
          [styles.m]: sizeof === 'm',
          [styles.l]: sizeof === 'l',
        },
        {
          [styles.ghost]:
            preFix?.appearence === 'ghost' || postFix?.appearence === 'ghost',
          [styles.primary]:
            preFix?.appearence === 'primary' ||
            postFix?.appearence === 'primary',
          [styles.error]:
            preFix?.appearence === 'error' || postFix?.appearence === 'error',
          [styles.success]:
            preFix?.appearence === 'success' ||
            postFix?.appearence === 'success',
          [styles.warring]:
            preFix?.appearence === 'warring' ||
            postFix?.appearence === 'warring',
        },
        {
          [styles.dark]: theme === 'dark',
        }
      )}
      style={style}
    >
      {label && <div className={styles.label}>{label}</div>}
      {preFix && <div className={styles.prefix}>{preFix.content}</div>}
      <input className={cn(styles.input)} {...props} />
      {postFix && <div className={styles.postfix}>{postFix.content}</div>}
    </div>
  );
};

export default Input;
