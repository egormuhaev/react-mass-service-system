export interface ISettingsState {
  theme: Theme;
  sidebarSlim: boolean;
  sidebarNeomorphism: boolean;
}

export type Theme = 'dark' | 'light';
