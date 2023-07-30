import { CardProjectProps } from './CardProject.props';
import styles from './CardProject.module.css';
import cn from 'classnames';
import { useState } from 'react';
import Button from '../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { queryParams, routerPrivate } from '../../../routes/config.routes';

const CardProject: React.FC<CardProjectProps> = ({
  title,
  subTitle,
  theme = 'light',
  id,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  const navigation = useNavigate();

  const toNavigate = () => {
    navigation(`${routerPrivate.PROJECT}?${queryParams.PROJECT_ID}=${id}`);
  };

  const onMouseHover = () => {
    if (hovered) {
      setHovered(false);
    } else {
      setHovered(true);
    }
  };

  return (
    <div
      className={cn(styles.card, {
        [styles.dark]: theme === 'dark',
      })}
      onMouseEnter={onMouseHover}
      onMouseLeave={onMouseHover}
      {...props}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
      {hovered && (
        <div className={styles.action}>
          <Button
            text="Открыть"
            size="s"
            appearence="primary"
            onClick={toNavigate}
          />
        </div>
      )}
    </div>
  );
};

export default CardProject;
