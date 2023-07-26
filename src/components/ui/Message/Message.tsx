import { MessageProps } from './Message.props';
import styles from './Message.module.css';
import cn from 'classnames';
import MessageItem from '../MessageItem/MessageItem';
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
  const [loadingList, setLoadingList] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    const mList = mesages.map((message) => (
      <MessageItem {...message} key={message.id} />
    ));
    setMessageList(mList);
  }, [mesages]);

  useEffect(() => {
    const lList = loadings.map((loading) => (
      <MessageItem {...loading} key={loading.id} />
    ));
    setLoadingList(lList);
  }, [loadings]);

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
      {loadingList}
    </div>
  );
};

export default Message;
