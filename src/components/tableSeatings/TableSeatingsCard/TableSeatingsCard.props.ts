import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export type Theme = 'dark' | 'light';

export interface TableSeatingsCardProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  theme?: Theme;
  name: string | null;
  id: string;
  active: boolean | null;
  seatings?: number | null;
}
