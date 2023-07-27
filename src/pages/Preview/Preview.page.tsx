import { useSettings } from '../../hooks';
import styles from './Preview.module.css';
import cn from 'classnames';
import { AnimationFrame } from '../../animation';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import { routerPrivate, routerPublick } from '../../routes/config.routes';

export const functionsItems = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
};

const Preview: React.FC = () => {
  const { settings } = useSettings();
  const navigation = useNavigate();
  return (
    <div
      className={cn(styles.page, {
        [styles.dark]: settings.theme === 'dark',
      })}
    >
      <div className={styles.preview}>
        <div className={styles.controlls}>
          <Button
            size="l"
            appearence="primary"
            onClick={() => {
              navigation(routerPrivate.PROJECTS);
            }}
          >
            Войти
          </Button>
          <Button
            size="l"
            appearence="primary"
            onClick={() => {
              navigation(routerPublick.REGISTRATION);
            }}
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>
      <AnimationFrame
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <AnimationFrame variants={functionsItems}>
          <div className={styles.functions}>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
          </div>
        </AnimationFrame>
      </AnimationFrame>
    </div>
  );
};

export default Preview;
