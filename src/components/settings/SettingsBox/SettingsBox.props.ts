export type Theme = 'dark' | 'light';

export interface IItemSetting {
  title: string;
  controll: React.ReactNode;
}

export interface SettingsBoxProps {
  children?: React.ReactNode;
  settings?: IItemSetting[];
  titleBox: string;
  theme: Theme;
}
