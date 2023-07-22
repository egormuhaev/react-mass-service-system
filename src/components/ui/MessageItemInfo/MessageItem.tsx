import { MessageItemProps } from '../../../interfaces/props/Message.props';
import styles from './MessageItem.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { BiErrorAlt } from 'react-icons/bi';
import { IoWarning } from 'react-icons/io5';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { AiOutlineLoading, AiOutlineCheckCircle } from 'react-icons/ai';

const MessageItem: React.FC<MessageItemProps> = ({
  theme,
  text,
  type = 'info',
  id,
}): JSX.Element => {
  const [icon, setIcon] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (type) {
      case 'error':
        setIcon(<BiErrorAlt />);
        break;
      case 'info':
        setIcon(<BsFillInfoCircleFill />);
        break;
      case 'warring':
        setIcon(<IoWarning />);
        break;
      case 'loading':
        setIcon(<AiOutlineLoading />);
        break;
      case 'success':
        setIcon(<AiOutlineCheckCircle />);
        break;
      default:
        setIcon(<BsFillInfoCircleFill />);
    }
  }, [type]);

  return (
    <div
      className={cn(styles.message, {
        [styles.dark]: theme === 'dark',
        [styles.light]: theme === 'light',
      })}
    >
      <div className={cn(styles.icon, styles[type])}>{icon}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default MessageItem;
