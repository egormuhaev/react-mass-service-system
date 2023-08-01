import { type } from 'os';
import { TableSeatingsCardProps } from '../TableSeatingsCard/TableSeatingsCard.props';
export type Theme = 'dark' | 'light';

export interface EditTableProps {
  children?: React.ReactNode;
  theme: Theme;
  tableId: string;
  tables: TableSeatingsCardProps[];
  onEdit?: (
    table_id: string,
    active: boolean,
    table_seating: number,
    name: string
  ) => void;
}

export type Table = TableSeatingsCardProps;
