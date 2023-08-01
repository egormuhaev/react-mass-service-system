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
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onDisable?: (
    table_id: string,
    active: boolean,
    table_seating: number,
    name: string
  ) => void;
}
