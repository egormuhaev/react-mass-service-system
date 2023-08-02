import { useSearchParams } from 'react-router-dom';
import { withLayout } from '../../layouts/Layout/Layout';
import { queryParams } from '../../routes/config.routes';
import { useMessage, useSettings } from '../../hooks';
import styles from './TableSeatings.module.css';
import { useEffect, useState } from 'react';
import { TableSeatingsCardProps } from '../../components/tableSeatings/TableSeatingsCard/TableSeatingsCard.props';
import {
  fetchSelectTable,
  fetchDeletaTable,
  fetchUpdateTable,
  fetchInsertCreateTable,
} from '../../api';
import { TableShema } from '../../interfaces/Supabase.interface';
import {
  Drawer,
  TableForm,
  TableSeatingsCardList,
  Button,
} from '../../components/index';

const TableSeatings: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { settings } = useSettings();
  const projectId = searchParams.get(queryParams.PROJECT_ID);
  const [data, setData] = useState<TableShema[] | null>(null);
  const [tables, setTables] = useState<TableSeatingsCardProps[]>([]);
  const [editTable, setEditTable] = useState<string | null>(null);
  const [createTable, setCreateTable] = useState(false);

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
          seatings: d.table_seating,
          onDelete: onDeleteTable,
          onDisable: onEditTableQuery,
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

  const onCreateTable = () => {
    if (!createTable) setCreateTable(true);
  };

  const onCreateTableQuery = async (table_seating: number, name: string) => {
    const id = sendLoading({ text: 'Добавление' });
    if (projectId) {
      const { data, error } = await fetchInsertCreateTable({
        project_id: projectId,
        table_seating,
        name,
      });
      if (error) sendMessage({ type: 'error', text: 'Ошибка' });
      else setCreateTable(false);
    }
    removeLoading(id);
  };

  const onEditTable = (id: string) => {
    if (!editTable) {
      setEditTable(id);
    }
  };

  const onEditTableQuery = async (
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
    if (error) {
      sendMessage({ type: 'error', text: 'Ошибка смены статуса' });
    } else {
      setEditTable(null);
    }
    removeLoading(loading);
  };

  const onCloseDrawer = () => {
    setEditTable(null);
    setCreateTable(false);
  };

  const getTables = async () => {
    if (projectId) {
      const { data, error } = await fetchSelectTable(projectId);
      if (error && !data) console.log(error);
      setData(data);
    }
  };

  return (
    <>
      <div className={styles.page}>
        <Button
          size="m"
          appearence="primary"
          text="Добавить стол"
          onClick={onCreateTable}
        />
        {!tables.length && <p>Столов нет</p>}
        <TableSeatingsCardList tables={tables} theme={settings.theme} />
      </div>
      {message}
      {(editTable || createTable) && (
        <Drawer
          onClose={onCloseDrawer}
          theme={settings.theme}
          title={editTable ? 'Редактирование стола' : 'Добавление стола'}
          style={{ width: '600px' }}
        >
          {editTable && (
            <TableForm
              tables={tables}
              tableId={editTable}
              onEdit={onEditTableQuery}
              theme={settings.theme}
            />
          )}
          {createTable && (
            <TableForm
              tables={tables}
              onCreate={onCreateTableQuery}
              theme={settings.theme}
            />
          )}
        </Drawer>
      )}
    </>
  );
};

export default withLayout(TableSeatings);
