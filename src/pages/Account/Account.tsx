import styles from './Account.module.css';
import { withLayout } from '../../layouts/Layout/Layout';
import { useSettings } from '../../hooks';
import { SwitchTheme, SwitchSlim, SwitchNeomorp } from '../../components';

const Account = () => {
  const { settings, controlls } = useSettings();

  const onSwitchTheme = (value: boolean) => {
    const theme = value ? 'dark' : 'light';
    controlls.setTheme(theme);
  };

  const onSwitchOther = (func: (val: boolean) => void) => {
    return (val: boolean) => {
      func(val);
    };
  };

  return (
    <>
      <SwitchNeomorp
        value={settings.sbNeomorphism}
        setVal={onSwitchOther(controlls.setSidebarNeomorphism)}
      />
      <SwitchSlim
        value={settings.sidebarSlim}
        setVal={onSwitchOther(controlls.setSidebarSlim)}
      />
      <SwitchTheme
        value={settings.theme === 'dark' ? true : false}
        setVal={onSwitchTheme}
      />
    </>
  );
};

export default withLayout(Account);
