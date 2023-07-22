import { IconType } from 'react-icons';
import React, { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

type Orientation = 'v' | 'h';

type Theme = 'dark' | 'light';

export interface MenuStruct {
  text: string;
  token: string;
  icon?: React.ReactNode | IconType;
  subIcon?: React.ReactNode | IconType;
}

export type MenuActionClick = (e: MenuActionData) => void;

export interface MenuProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  theme?: Theme;
  children?: React.ReactNode;
  struct?: MenuStruct[];
  orientation?: Orientation;
  slim?: boolean;
  actionOnClick?: MenuActionClick;
}

export interface MenuActionData {
  text: string;
  token: string;
}

export interface MenuItemProps {
  text: string;
  icon?: React.ReactNode | IconType | any;
  subIcon?: React.ReactNode | IconType | any;
  theme: Theme;
  slim: boolean;
  token: string;
  setSelected: (state: string | null | number) => void;
  id: string | number;
  isSelect: string | null | number;
  actionOnClick?: MenuActionClick;
}
