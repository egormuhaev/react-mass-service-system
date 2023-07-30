import styles from './SettingsBox.module.css';
import { SettingsBoxProps } from './SettingsBox.props';
import Htag from '../../ui/Htag/Htag';
import cn from 'classnames';

const SettingsBox: React.FC<SettingsBoxProps> = ({
  children,
  theme,
  titleBox,
  settings = [],
}): JSX.Element => {
  const settingsItems = settings.map((s) => (
    <div className={styles.settingsItem}>
      <p className={styles.titleSettings}>{s.title}</p>
      <div className={styles.controllSettings}>{s.controll}</div>
    </div>
  ));

  return (
    <div
      className={cn(styles.settingsContainer, {
        [styles.dark]: theme === 'dark',
      })}
    >
      <Htag size="s" theme={theme}>
        {titleBox}
      </Htag>
      {settingsItems}
      <div className={styles.otherContent}>{children}</div>
    </div>
  );
};

export default SettingsBox;
