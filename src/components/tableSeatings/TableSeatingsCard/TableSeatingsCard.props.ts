import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export type Theme = 'dark' | 'light';

export interface TableSeatingsCardProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  theme: Theme;
  name: string;
  id: string;
  active: boolean;
  seatings?: number;
}
