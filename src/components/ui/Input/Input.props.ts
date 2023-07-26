import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type Size = 's' | 'm' | 'l';
export type Appearence = 'ghost' | 'primary' | 'error' | 'success' | 'warring';
type Theme = 'dark' | 'light';

export interface IPrefixPostfix {
  content?: React.ReactNode;
  appearence?: Appearence;
}

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children?: React.ReactNode;
  sizeof?: Size;
  preFix?: IPrefixPostfix;
  postFix?: IPrefixPostfix;
  label?: string;
  theme?: Theme;
}
