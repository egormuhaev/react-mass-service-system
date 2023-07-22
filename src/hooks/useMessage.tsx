import { useEffect, useState } from 'react';
import { Message } from '../components';
import { MessageItemProps, Theme } from '../interfaces/props/Message.props';
import { v4 } from 'uuid';

interface UseMessageReturn {
  message: JSX.Element;

  sendMessage: (args: MessageItemProps) => void;
  sendLoading: (args: MessageItemProps) => string;
  removeLoading: (id: string) => void;
}

const useMessage = (theme: Theme): UseMessageReturn => {
  const initMessage = <Message theme={theme} mesages={[]} loadings={[]} />;
  const [message, setMessage] = useState<JSX.Element>(initMessage);
  const [messageList, setMessageList] = useState<MessageItemProps[]>([]);
  const [loadingList, setLoadindList] = useState<MessageItemProps[]>([]);

  useEffect(() => {
    setMessage(
      <Message theme={theme} mesages={messageList} loadings={loadingList} />
    );
  }, [messageList, loadingList]);

  const sendMessage = (args: MessageItemProps) => {
    const idMessage = v4();
    setMessageList([
      ...messageList,
      {
        ...args,
        id: idMessage,
      },
    ]);
  };

  const sendLoading = (args: MessageItemProps) => {
    const idLoading = v4();
    setLoadindList([
      ...loadingList,
      {
        ...args,
        type: 'loading',
        id: idLoading,
      },
    ]);
    return idLoading;
  };

  const removeLoading = (id: string) => {
    const newList = loadingList.filter((e) => e.id !== id);
    setLoadindList(newList);
  };

  return { message, sendLoading, sendMessage, removeLoading };
};

export default useMessage;
