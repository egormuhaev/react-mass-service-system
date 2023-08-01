import { TableSeatingsCardProps } from './TableSeatingsCard.props';
import styles from './TableSeatingsCard.module.css';
import cn from 'classnames';
import {
  MdOutlineTableBar,
  MdDeleteSweep,
  MdModeEdit,
  MdPlayArrow,
  MdPlayDisabled,
} from 'react-icons/md';
import Button from '../../ui/Button/Button';
import Switch from 'react-switch';
import SwitchInnerIcon from '../../settings/SwitchInnerIcon/SwitchInnerIcon';

const TableSeatingsCard: React.FC<TableSeatingsCardProps> = ({
  children,
  theme,
  name,
  active,
  seatings,
  onEdit,
  onDelete,
  onDisable,
  id,
  ...props
}): JSX.Element => {
  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  const handleActiveSwitch = () => {
    if (onDisable) {
      onDisable(id, !active, seatings ?? 0, name ?? '');
    }
  };

  const handleEditClick = () => {
    if (onEdit) {
      onEdit(id);
    }
  };

  return (
    <div
      className={cn(styles.card, {
        [styles.dark]: theme === 'dark',
      })}
    >
      <div className={styles.icon} {...props}>
        <MdOutlineTableBar />
      </div>
      <div className={styles.name}>{name}</div>

      <div className={styles.controls}>
        <div className={styles.seatings}>Посадочных мест: {seatings}</div>
        <Switch
          uncheckedIcon={false}
          checkedIcon={false}
          offColor="#f0f0f0"
          onColor="#008efd"
          uncheckedHandleIcon={
            <SwitchInnerIcon>
              <MdPlayDisabled
                style={{ height: '90%', width: '90%', color: '#1d2628' }}
              />
            </SwitchInnerIcon>
          }
          checkedHandleIcon={
            <SwitchInnerIcon>
              <MdPlayArrow
                style={{ height: '90%', width: '90%', color: '#1d2628' }}
              />
            </SwitchInnerIcon>
          }
          onChange={handleActiveSwitch}
          checked={active ?? true}
        />

        <Button appearence="warring" onClick={handleEditClick}>
          <MdModeEdit />
        </Button>
        <Button appearence="error" onClick={handleDeleteClick}>
          <MdDeleteSweep />
        </Button>
      </div>
    </div>
  );
};

export default TableSeatingsCard;
