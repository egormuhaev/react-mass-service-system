import styles from '../styles/Test.module.css';
import cn from 'classnames';
import { useModal, useMessage } from '../hooks';
import { useState } from 'react';

const Test = () => {
  const { modal, getPresetModal } = useModal();
  const { message, sendLoading, sendMessage, removeLoading } =
    useMessage('light');
  const [loading, setLoadind] = useState<string | null>();

  return (
    <>
      <div className={cn(styles.page)}>
        <p>ты пидр</p>
        <button
          onClick={() => {
            getPresetModal('warringS', 'Окно типа warring', 'Будьте осторожны');
          }}
        >
          Open warring modal
        </button>
        <button
          onClick={() => {
            getPresetModal('errorS', 'Окно типа error', 'Тут косяк получается');
          }}
        >
          Open error modal
        </button>
        <button
          onClick={() => {
            getPresetModal('ghostS', 'Окно типа succes', 'Все ОК');
          }}
        >
          Open succes modal
        </button>
        <button
          onClick={() => {
            sendMessage({ type: 'info', text: 'Привет' });
          }}
        >
          Send Message
        </button>
        <button
          onClick={() => {
            const id = sendLoading({ text: 'Sign Up Process' });
            setLoadind(id);
          }}
        >
          Send Loading
        </button>
        <button
          onClick={() => {
            if (loading) {
              sendMessage({
                type: 'success',
                text: 'Success',
              });
              removeLoading(loading);
              setLoadind(null);
            }
          }}
        >
          Dead Loading
        </button>
      </div>
      {message}
      {modal}
    </>
  );
};

export default Test;
