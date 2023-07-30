import { useSearchParams } from 'react-router-dom';
import { withLayout } from '../../layouts/Layout/Layout';
import { queryParams } from '../../routes/config.routes';
import { useSettings } from '../../hooks';
import { TableSeatingsCard } from '../../components';
import styles from './TableSeatings.module.css';

const TableSeatings: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { settings } = useSettings();
  const projectId = searchParams.get(queryParams.PROJECT_ID);

  return (
    <div className={styles.page}>
      <TableSeatingsCard
        active={true}
        theme={settings.theme}
        name="Стол 1"
        seatings={4}
        id="123WADCDSFAVCF3d"
      />
      <TableSeatingsCard
        active={false}
        theme={settings.theme}
        name="Стол 2"
        id="1233123123dacdwcdawdc"
      />
    </div>
  );
};

export default withLayout(TableSeatings);
