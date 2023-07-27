import styles from './Account.module.css';
import { withLayout } from '../../layouts/Layout/Layout';
import { useSettings } from '../../hooks';

const Account = () => {
  const { settings, controlls } = useSettings();

  return <></>;
};

export default withLayout(Account);
