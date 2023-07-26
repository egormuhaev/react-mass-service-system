import { useModal } from '../../../hooks';
import { CreacteProjectModalProps } from './CreacteProjectModal.props';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import { useState } from 'react';
import { ModalProps } from '../../ui/Modal/Modal.props';

const CreacteProjectModal: React.FC<CreacteProjectModalProps> = ({
  value,
  setValue,
  theme,
  onCreate,
}) => {
  const { getModalRerender } = useModal(theme);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setValue(text);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
    setValue('');
  };

  const modalBody = (
    <Input
      preFix={{
        content: 'Название',
        appearence: 'ghost',
      }}
      theme={theme}
      value={value}
      onInput={onInput}
    />
  );

  const toClose = () => {
    setIsOpenModal(false);
    onCreate();
  };

  const modalConsifg: ModalProps = {
    title: 'Созадать новый проект',
    children: modalBody,
    size: 'm',
    close: onCloseModal,
    footer: [
      {
        appearence: 'ghost',
        title: 'Отмена',
        action: onCloseModal,
      },
      {
        appearence: 'primary',
        title: 'Создать',
        action: toClose,
      },
    ],
  };

  return (
    <>
      <Button
        onClick={() => {
          setIsOpenModal(true);
        }}
        appearence="primary"
        size="s"
        text={'Новый проект'}
      />
      {isOpenModal && getModalRerender(modalConsifg)}
    </>
  );
};

export default CreacteProjectModal;
