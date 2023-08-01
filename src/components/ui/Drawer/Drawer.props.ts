import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export type Theme = 'dark' | 'light';
export type Orientation = 'top' | 'down' | 'left' | 'right';

export interface DrawerProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  theme: Theme;
  children?: React.ReactNode;
  orientation?: Orientation;
  title?: string;
  onClose?: () => void;
}
