import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export type Appearence = 'ghost' | 'primary' | 'error' | 'success' | 'warring';
export type Size = 's' | 'm';

export interface FooterActions {
  appearence?: Appearence;
  title: string;
  action: () => void;
}

export interface ModalProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  titleIcon?: React.ReactNode | IconType | any;
  tittleIconAppearence?: Appearence;
  title?: string;
  theme?: Theme;
  footer?: FooterActions[];
  size?: Size;
  close?: (a: null) => void;
}

type Theme = 'dark' | 'light';
