import styles from './TableSeatingsHeader.module.css';
import { TableSeatingsHeaderProps } from './TableSeatingsHeader.props';

const TableSeatingsHeader: React.FC<TableSeatingsHeaderProps> = ({
  children,
}) => {
  return <div className={styles.header}></div>;
};

export default TableSeatingsHeader;
