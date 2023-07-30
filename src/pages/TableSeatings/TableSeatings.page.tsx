import { useSearchParams } from 'react-router-dom';
import { withLayout } from '../../layouts/Layout/Layout';
import { queryParams } from '../../routes/config.routes';
import { useSettings } from '../../hooks';
import { TableSeatingsCardList } from '../../components';
import styles from './TableSeatings.module.css';
import { useEffect, useState } from 'react';
import { TableSeatingsCardProps } from '../../components/tableSeatings/TableSeatingsCard/TableSeatingsCard.props';
import { fetchSelectTable } from '../../api';
import { TableShema } from '../../interfaces/Supabase.interface';

const TableSeatings: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { settings } = useSettings();
  const projectId = searchParams.get(queryParams.PROJECT_ID);
  const [data, setData] = useState<TableShema[] | null>(null);
  const [tables, setTables] = useState<TableSeatingsCardProps[]>([]);

  useEffect(() => {
    getTables();
  });

  useEffect(() => {
    if (data) {
      const list = data.map((d) => {
        return {
          id: d.id,
          name: d.name,
          active: d.active,
          settings: d.table_seating,
        };
      });
      setTables(list);
    }
  }, [data]);

  const getTables = async () => {
    if (projectId) {
      const { data, error } = await fetchSelectTable(projectId);
      if (error) console.log(error);
      setData(data);
    }
  };

  return (
    <div className={styles.page}>
      {!tables.length && <p>Столов нет</p>}
      <TableSeatingsCardList tables={tables} theme={settings.theme} />
    </div>
  );
};

export default withLayout(TableSeatings);
