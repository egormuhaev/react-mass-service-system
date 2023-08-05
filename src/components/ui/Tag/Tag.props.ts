import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export type Theme = 'dark' | 'light';
export type Size = 's' | 'm' | 'l';
export type Appearence =
  | 'ghost'
  | 'primary'
  | 'error'
  | 'success'
  | 'warring'
  | 'random';

export interface TagProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  text: string;
  theme: Theme;
  appearence: Appearence;
}
