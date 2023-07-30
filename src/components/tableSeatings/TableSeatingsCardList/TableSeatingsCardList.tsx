import styles from './TableSeatingsCardList.module.css';
import { TableSeatingsCardListProps } from './TableSeatingsCardList.props';
import TableSeatingsCard from '../TableSeatingsCard/TableSeatingsCard';

const TableSeatingsCardList: React.FC<TableSeatingsCardListProps> = ({
  tables = [],
}) => {
  const tablesList = tables.map((t) => {
    return <TableSeatingsCard {...t} key={t.id} />;
  });

  return <>{tablesList}</>;
};

export default TableSeatingsCardList;
