import { TableFormProps, Table } from './TableForm.props';
import styles from './EditTable.module.css';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import { useEffect, useState } from 'react';

const TableForm: React.FC<TableFormProps> = ({
  theme,
  onEdit,
  tableId,
  tables,
  onCreate,
}) => {
  const [name, setName] = useState<string>('');
  const [seatings, setSeatings] = useState<number>(0);
  const [table, setTable] = useState<Table | null>(null);

  useEffect(() => {
    if (tableId) {
      const table = tables.filter((t) => t.id === tableId)[0];
      setName(table.name ?? '');
      setSeatings(table.seatings ?? 0);
      setTable(table);
    }
  }, []);

  const handleInputValue = (func: (a: any) => void) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      func(val);
    };
  };

  const handleClickSave = () => {
    if (onEdit && table && name && seatings && tableId) {
      const seatingsCurrent =
        seatings > 0 ? Math.round(seatings) : -1 * Math.round(seatings);
      onEdit(tableId, table.active ?? true, seatingsCurrent, name);
    }
  };

  const handleClickCreate = () => {
    if (onCreate) {
      onCreate(seatings, name);
    }
  };

  return (
    <div className={styles.edit}>
      <Input
        theme={theme}
        sizeof="m"
        value={name}
        preFix={{
          content: 'Название',
          appearence: 'ghost',
        }}
        onInput={handleInputValue(setName)}
      />
      <Input
        theme={theme}
        sizeof="m"
        type="number"
        value={seatings}
        preFix={{
          content: 'Стулья',
          appearence: 'ghost',
        }}
        onInput={handleInputValue(setSeatings)}
      />
      {onEdit && (
        <Button
          appearence="success"
          text="Сохранить"
          onClick={handleClickSave}
        />
      )}
      {onCreate && (
        <Button
          appearence="success"
          text="Создать"
          onClick={handleClickCreate}
        />
      )}
    </div>
  );
};

export default TableForm;
