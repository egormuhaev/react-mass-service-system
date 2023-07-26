import { MessageItemProps } from './Message.props';
import styles from './MessageItem.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { BiErrorAlt } from 'react-icons/bi';
import { IoWarning } from 'react-icons/io5';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { AiOutlineLoading, AiOutlineCheckCircle } from 'react-icons/ai';

const messageIcons = {
  error: <BiErrorAlt />,
  info: <BsFillInfoCircleFill />,
  warring: <IoWarning />,
  loading: <AiOutlineLoading />,
  success: <AiOutlineCheckCircle />,
};

const MessageItem: React.FC<MessageItemProps> = ({
  theme,
  text,
  type = 'info',
}): JSX.Element => {
  const [icon, setIcon] = useState<JSX.Element | null>(null);
  const [visible, setVisible] = useState(false);

  setTimeout(() => {
    setVisible(true);
  }, 5000);

  useEffect(() => {
    setIcon(messageIcons[type]);
  }, [type]);

  return (
    <div
      className={cn(
        styles.message,
        {
          [styles.dark]: theme === 'dark',
          [styles.light]: theme === 'light',
        },
        {
          [styles.visible]: visible && type !== 'loading',
        }
      )}
    >
      <div className={cn(styles.icon, styles[type])}>{icon}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default MessageItem;
