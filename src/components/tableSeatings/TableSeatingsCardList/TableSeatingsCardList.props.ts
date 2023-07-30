import { TableSeatingsCardProps } from '../TableSeatingsCard/TableSeatingsCard.props';

export type Theme = 'dark' | 'light';

export interface TableSeatingsCardListProps {
  tables: TableSeatingsCardProps[];
  theme: Theme;
}
