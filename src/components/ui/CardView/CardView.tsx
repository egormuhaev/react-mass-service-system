import { CardViewProps } from './CardView.props';
import styles from './CardView.module.css';
import cn from 'classnames';

const CardView: React.FC<CardViewProps> = ({
  img,
  theme,
  title,
  className,
  size = 's',
  ref,
  ...props
}) => {
  return (
    <div
      ref={ref}
      className={cn(
        styles.card,
        className,
        {
          [styles.dark]: theme === 'dark',
        },
        {
          [styles.s]: size === 's',
          [styles.m]: size === 'm',
        }
      )}
      {...props}
    >
      <div className={styles.image}>{img && <img src={img} alt={title} />}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default CardView;
