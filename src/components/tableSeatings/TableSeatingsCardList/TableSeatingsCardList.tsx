import styles from './TableSeatingsCardList.module.css';
import { TableSeatingsCardListProps } from './TableSeatingsCardList.props';
import TableSeatingsCard from '../TableSeatingsCard/TableSeatingsCard';

const TableSeatingsCardList: React.FC<TableSeatingsCardListProps> = ({
  tables = [],
  theme,
}) => {
  const tablesList = tables.map((t) => {
    return <TableSeatingsCard {...t} theme={theme} key={t.id} />;
  });

  return <>{tablesList}</>;
};

export default TableSeatingsCardList;
