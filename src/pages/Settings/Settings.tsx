import styles from './Settings.module.css';
import { withLayout } from '../../layouts/Layout/Layout';
import { useSettings } from '../../hooks';
import {
  SwitchTheme,
  SwitchSlim,
  SwitchNeomorp,
  Htag,
  SettingsBox,
  CardView,
} from '../../components';
import neoOf from '../../assets/img/neo_off.png';
import neoOn from '../../assets/img/neo_on.png';
import paletDark from '../../assets/img/palet_ui_dark.png';
import paletLight from '../../assets/img/palet_ui_light.png';

const Settings = () => {
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
      <Htag size="m" theme={settings.theme}>
        Настройки приложения
      </Htag>
      <SettingsBox
        titleBox="Оформление"
        theme={settings.theme}
        settings={[
          {
            title: 'Включить неоморфизм',
            controll: (
              <SwitchNeomorp
                value={settings.sbNeomorphism}
                setVal={onSwitchOther(controlls.setSidebarNeomorphism)}
              />
            ),
          },
          {
            title: 'Ночью темная, днем светлая',
            controll: (
              <SwitchTheme
                value={settings.theme === 'dark' ? true : false}
                setVal={onSwitchTheme}
              />
            ),
          },
        ]}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: '20px',
          }}
        >
          <CardView
            title="Классика"
            size="s"
            theme={settings.theme}
            img={neoOf}
          />
          <CardView
            title="Неоморфизм"
            size="s"
            theme={settings.theme}
            img={neoOn}
          />
        </div>
        <div
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: '20px',
          }}
        >
          <CardView
            title="Темная"
            size="s"
            theme={settings.theme}
            img={paletDark}
          />
          <CardView
            title="Светлая"
            size="s"
            theme={settings.theme}
            img={paletLight}
          />
        </div>
      </SettingsBox>
      <SettingsBox
        titleBox="Навигационная панель"
        theme={settings.theme}
        settings={[
          {
            title: 'Ширина',
            controll: (
              <SwitchSlim
                value={settings.sidebarSlim}
                setVal={onSwitchOther(controlls.setSidebarSlim)}
              />
            ),
          },
        ]}
      />
    </>
  );
};

export default withLayout(Settings);
