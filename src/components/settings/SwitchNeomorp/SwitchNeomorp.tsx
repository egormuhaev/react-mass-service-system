import SwitchInnerIcon from '../SwitchInnerIcon/SwitchInnerIcon';
import Switch from 'react-switch';
import { LiaNeos } from 'react-icons/lia';
import { GrClose } from 'react-icons/gr';

export interface SwitchThemeProps {
  value: boolean;
  setVal: (val: boolean) => void;
}

const SwitchNeomorp: React.FC<SwitchThemeProps> = ({ value, setVal }) => {
  return (
    <>
      <Switch
        uncheckedIcon={false}
        checkedIcon={false}
        offColor="#222629"
        onColor="#f0f0f0"
        uncheckedHandleIcon={
          <SwitchInnerIcon>
            <LiaNeos style={{ height: '90%', width: '90%' }} />
          </SwitchInnerIcon>
        }
        checkedHandleIcon={
          <SwitchInnerIcon>
            <GrClose style={{ height: '90%', width: '90%' }} />
          </SwitchInnerIcon>
        }
        onChange={setVal}
        checked={value}
      />
    </>
  );
};

export default SwitchNeomorp;
