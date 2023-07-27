import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export type Size = 's' | 'm';
export type Theme = 'dark' | 'light';

export interface CardViewProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  img?: string;
  title: string;
  size?: Size;
  theme: Theme;
}
