import SwitchInnerIcon from '../SwitchInnerIcon/SwitchInnerIcon';
import Switch from 'react-switch';
import { MdModeNight, MdSunny } from 'react-icons/md';

export interface SwitchThemeProps {
  value: boolean;
  setVal: (val: boolean) => void;
}

const SwitchTheme: React.FC<SwitchThemeProps> = ({ value, setVal }) => {
  return (
    <>
      <Switch
        uncheckedIcon={false}
        checkedIcon={false}
        offColor="#222629"
        onColor="#f0f0f0"
        uncheckedHandleIcon={
          <SwitchInnerIcon>
            <MdModeNight style={{ height: '90%', width: '90%' }} />
          </SwitchInnerIcon>
        }
        checkedHandleIcon={
          <SwitchInnerIcon>
            <MdSunny style={{ height: '90%', width: '90%' }} />
          </SwitchInnerIcon>
        }
        onChange={setVal}
        checked={value}
      />
    </>
  );
};

export default SwitchTheme;
