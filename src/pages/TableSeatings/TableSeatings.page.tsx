import { useSearchParams } from 'react-router-dom';
import { withLayout } from '../../layouts/Layout/Layout';
import { queryParams } from '../../routes/config.routes';
import { useMessage, useSettings } from '../../hooks';
import { TableSeatingsCardList } from '../../components';
import styles from './TableSeatings.module.css';
import { useEffect, useState } from 'react';
import { TableSeatingsCardProps } from '../../components/tableSeatings/TableSeatingsCard/TableSeatingsCard.props';
import {
  fetchSelectTable,
  fetchDeletaTable,
  fetchUpdateTable,
} from '../../api';
import { TableShema } from '../../interfaces/Supabase.interface';
import { Drawer } from '../../components/index';

const TableSeatings: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { settings } = useSettings();
  const projectId = searchParams.get(queryParams.PROJECT_ID);
  const [data, setData] = useState<TableShema[] | null>(null);
  const [tables, setTables] = useState<TableSeatingsCardProps[]>([]);
  const [editTable, setEditTable] = useState<string | null>(null);

  const { message, sendLoading, removeLoading, sendMessage } = useMessage(
    settings.theme
  );

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
          onDelete: onDeleteTable,
          onDisable: onDisable,
          onEdit: onEditTable,
        };
      });
      setTables(list);
    }
  }, [data]);

  const onDeleteTable = async (id: string) => {
    const loading = sendLoading({ text: 'Удаление' });
    const { data, error } = await fetchDeletaTable(id);
    if (error) sendMessage({ type: 'error', text: 'Ошибка удаления' });
    removeLoading(loading);
  };

  const onEditTable = async (id: string) => {
    if (!editTable) {
      setEditTable(id);
    }
  };

  const onDisable = async (
    table_id: string,
    active: boolean,
    table_seating: number,
    name: string
  ) => {
    const loading = sendLoading({ text: 'Смена статуса' });
    const { data, error } = await fetchUpdateTable({
      table_id,
      name,
      table_seating,
      active,
    });
    if (error) sendMessage({ type: 'error', text: 'Ошибка смены статуса' });
    removeLoading(loading);
  };

  const onCloseDrawer = () => {
    setEditTable(null);
  };

  const getTables = async () => {
    if (projectId) {
      const { data, error } = await fetchSelectTable(projectId);
      if (error) sendMessage({ type: 'error', text: 'Ошибка загрузки' });
      setData(data);
    }
  };

  return (
    <>
      <div className={styles.page}>
        {!tables.length && <p>Столов нет</p>}
        <TableSeatingsCardList tables={tables} theme={settings.theme} />
      </div>
      {message}
      {editTable && (
        <Drawer
          onClose={onCloseDrawer}
          theme={settings.theme}
          title="Настройка стола"
          style={{ width: '600px' }}
        >
          123
        </Drawer>
      )}
    </>
  );
};

export default withLayout(TableSeatings);
