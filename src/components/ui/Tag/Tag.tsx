import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

const Tag: React.FC<TagProps> = ({ text, theme, ...props }) => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.dark]: theme === 'dark',
      })}
    >
      {text}
    </div>
  );
};

export default Tag;
