import { ButtonHTMLAttributes, DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export type Size = 's' | 'm' | 'l';
export type Appearence = 'ghost' | 'primary' | 'error' | 'success' | 'warring';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  size?: Size;
  appearence?: Appearence;
  icon?: React.ReactNode | IconType | any;
  text?: string | number;
}
