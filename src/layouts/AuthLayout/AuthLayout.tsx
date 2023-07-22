import styles from './AuthLayout.module.css';

export interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className={styles.page}>
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
