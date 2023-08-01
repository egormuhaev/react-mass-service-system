import styles from './Drawer.module.css';
import { DrawerProps } from './Drawer.props';
import cn from 'classnames';
import Htag from '../Htag/Htag';
import Button from '../Button/Button';
import { AiOutlineClose } from 'react-icons/ai';

const Drawer: React.FC<DrawerProps> = ({
  children,
  theme,
  orientation = 'right',
  title,
  onClose,
  ...props
}) => {
  return (
    <div
      className={cn(
        styles.bg,
        {
          [styles.left]: orientation === 'left',
          [styles.right]: orientation === 'right',
          [styles.top]: orientation === 'top',
          [styles.down]: orientation === 'down',
        },
        {
          [styles.dark]: theme === 'dark',
        }
      )}
    >
      <div className={styles.drawer} {...props}>
        {title && (
          <>
            <div className={styles.title}>
              <Button
                icon={<AiOutlineClose />}
                onClick={onClose}
                size="m"
                appearence="primary"
                className={styles.close}
              />
              <Htag
                className={styles.text}
                textAlign="left"
                theme={theme}
                size="s"
              >
                {title}
              </Htag>
            </div>
            <hr />
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default Drawer;
