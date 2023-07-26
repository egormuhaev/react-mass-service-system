import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface CardProjectProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title?: string;
  subTitle?: string;
  theme?: 'light' | 'dark';
  id?: string;
  route?: string;
}
