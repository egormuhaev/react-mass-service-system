import SwitchInnerIcon from '../SwitchInnerIcon/SwitchInnerIcon';
import Switch from 'react-switch';
import { TbViewportNarrow, TbViewportWide } from 'react-icons/tb';

export interface SwitchThemeProps {
  value: boolean;
  setVal: (val: boolean) => void;
}

const SwitchSlim: React.FC<SwitchThemeProps> = ({ value, setVal }) => {
  return (
    <>
      <Switch
        uncheckedIcon={false}
        checkedIcon={false}
        offColor="#222629"
        onColor="#f0f0f0"
        uncheckedHandleIcon={
          <SwitchInnerIcon>
            <TbViewportNarrow style={{ height: '90%', width: '90%' }} />
          </SwitchInnerIcon>
        }
        checkedHandleIcon={
          <SwitchInnerIcon>
            <TbViewportWide style={{ height: '80%', width: '80%' }} />
          </SwitchInnerIcon>
        }
        onChange={setVal}
        checked={value}
      />
    </>
  );
};

export default SwitchSlim;
