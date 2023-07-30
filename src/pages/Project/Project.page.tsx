import styles from './Project.module.css';
import { withLayout } from '../../layouts/Layout/Layout';
import { useSearchParams } from 'react-router-dom';
import { queryParams } from '../../routes/config.routes';
import { useSettings } from '../../hooks';

const Project: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { settings } = useSettings();
  
  return <>{searchParams.get(queryParams.PROJECT_ID)}</>;
};

export default withLayout(Project);
