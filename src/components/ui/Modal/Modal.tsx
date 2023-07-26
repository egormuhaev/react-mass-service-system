import { ModalProps } from './Modal.props';
import cn from 'classnames';
import styles from './Modal.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useCallback, useMemo, useState } from 'react';
import Button from '../Button/Button';

const Modal: React.FC<ModalProps> = ({
  children,
  theme = 'light',
  title,
  titleIcon,
  footer,
  size = 's',
  tittleIconAppearence = 'ghost',
  close,
  ...props
}) => {
  const [visible, setVisible] = useState(true);
  const footerActions = useMemo(() => {
    if (footer)
      return footer.map((e, index) => (
        <Button
          onClick={e.action}
          key={index}
          size="s"
          appearence={e.appearence ?? 'ghost'}
        >
          {e.title}
        </Button>
      ));
  }, [footer]);

  const onClickClose = useCallback(() => {
    if (close) {
      close();
    } else {
      setVisible(false);
    }
  }, [close]);

  return (
    <div
      onDoubleClick={onClickClose}
      className={cn(styles.bg, {
        [styles.visible]: !visible,
      })}
    >
      <div
        className={cn(
          styles.modal,
          {
            [styles.dark]: theme === 'dark',
            [styles.light]: theme === 'light',
          },
          {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
          }
        )}
        {...props}
      >
        <div className={styles.title}>
          {titleIcon && (
            <div
              className={cn(styles.icon, {
                [styles.ghost]: tittleIconAppearence === 'ghost',
                [styles.error]: tittleIconAppearence === 'error',
                [styles.primary]: tittleIconAppearence === 'primary',
                [styles.success]: tittleIconAppearence === 'success',
                [styles.warring]: tittleIconAppearence === 'warring',
              })}
            >
              {titleIcon}
            </div>
          )}
          {title && <div className={styles.text}>{title}</div>}
          <button className={styles.close} onClick={onClickClose}>
            <AiOutlineClose />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
        {footer && <div className={styles.footer}>{footerActions}</div>}
      </div>
    </div>
  );
};

export default Modal;
