import { useState } from 'react';
import { ModalProps } from '../interfaces/props/Modal.props';
import { BiErrorAlt } from 'react-icons/bi';
import { GrStatusGood } from 'react-icons/gr';
import { IoWarning } from 'react-icons/io5';
import { Modal } from '../components';

export interface ModalPresets {
  errorS: ModalProps;
  successS: ModalProps;
  warringS: ModalProps;
  ghostS: ModalProps;
  primaryS: ModalProps;
}

export type Presets =
  | 'errorS'
  | 'successS'
  | 'warringS'
  | 'ghostS'
  | 'primaryS';

const modalPreset: ModalPresets = {
  errorS: {
    title: 'Error: ',
    titleIcon: <BiErrorAlt />,
    tittleIconAppearence: 'error',
    size: 's',
  },
  successS: {
    title: 'Success: ',
    titleIcon: <GrStatusGood />,
    tittleIconAppearence: 'success',
    size: 's',
  },
  warringS: {
    title: 'Warring: ',
    titleIcon: <IoWarning />,
    tittleIconAppearence: 'warring',
    size: 's',
  },
  ghostS: {
    tittleIconAppearence: 'ghost',
    size: 's',
  },
  primaryS: {
    tittleIconAppearence: 'primary',
    size: 's',
  },
};

export type UseModalReturn = {
  modal: JSX.Element | null;
  getCustomModal: (args: ModalProps) => void;
  getPresetModal: (type: Presets, message: string, title: string) => void;
};

const useModal = (): UseModalReturn => {
  const [modal, setModal] = useState<JSX.Element | null>(null);

  const removeModal = async (a: null) => {
    setModal(a);
  };

  const getCustomModal = ({ ...args }: ModalProps) => {
    const newModal = <Modal {...args} close={removeModal} />;
    setModal(newModal);
  };

  const getPresetModal = (type: Presets, message: string, title: string) => {
    const newModal = (
      <Modal
        {...modalPreset[type]}
        tittleIconAppearence={modalPreset[type].tittleIconAppearence}
        children={message}
        title={modalPreset[type].title + `${title}`}
        close={removeModal}
      />
    );
    setModal(newModal);
  };

  return { modal, getCustomModal, getPresetModal };
};

export default useModal;
