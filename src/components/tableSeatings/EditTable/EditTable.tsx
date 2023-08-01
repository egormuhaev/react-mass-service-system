import { EditTableProps, Table } from './EditTable.props';
import styles from './EditTable.module.css';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import { useEffect, useState } from 'react';

const EditTable: React.FC<EditTableProps> = ({
  theme,
  onEdit,
  tableId,
  tables,
}) => {
  const [name, setName] = useState<string>('');
  const [seatings, setSeatings] = useState<number>(0);
  const [table, setTable] = useState<Table | null>(null);

  useEffect(() => {
    const table = tables.filter((t) => t.id === tableId)[0];
    setName(table.name ?? '');
    setSeatings(table.seatings ?? 0);
    setTable(table);
  }, []);

  const handleInputValue = (func: (a: any) => void) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      func(val);
    };
  };

  const handleClickSave = () => {
    if (onEdit && table && name && seatings) {
      onEdit(tableId, table.active ?? true, seatings, name);
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
      <Button appearence="success" text="Сохранить" onClick={handleClickSave} />
    </div>
  );
};

export default EditTable;
