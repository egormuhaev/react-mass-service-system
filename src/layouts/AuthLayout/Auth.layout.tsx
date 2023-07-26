import styles from './Auth.module.css';
import cn from 'classnames';
import { useSettings } from '../../hooks';

export interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const { settings } = useSettings();
  return (
    <div
      className={cn(styles.page, {
        [styles.dark]: settings.theme === 'dark',
      })}
    >
      <div className={styles.form}>{children}</div>
    </div>
  );
};

export const withAuthLayout = <T extends Record<string, unknown>>(
  Component: React.FunctionComponent<T>
) => {
  return function withAuthLayoutComponent(props: T): JSX.Element {
    return (
      <AuthLayout>
        <Component {...props} />
      </AuthLayout>
    );
  };
};
