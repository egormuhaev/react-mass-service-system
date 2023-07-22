import { MessageProps } from '../../../interfaces/props/Message.props';
import styles from './Message.module.css';
import cn from 'classnames';
import MessageItem from '../MessageItemInfo/MessageItem';
import { useEffect, useState } from 'react';

const Message: React.FC<MessageProps> = ({
  children,
  align = ['bottom', 'right'],
  theme = 'light',
  mesages,
  loadings,
  ...props
}) => {
  const [messageList, setMessageList] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    const mList = mesages.map((m) => <MessageItem {...m} key={m.id} />);
    const lList = loadings.map((l) => <MessageItem {...l} key={l.id} />);
    setMessageList([...mList, ...lList]);
  }, [mesages, loadings]);

  return (
    <div
      className={cn(styles.bg, {
        [styles.left]: align.includes('left'),
        [styles.right]: align.includes('right'),
        [styles.bottom]: align.includes('bottom'),
        [styles.top]: align.includes('top'),
      })}
      {...props}
    >
      {messageList}
    </div>
  );
};

export default Message;
