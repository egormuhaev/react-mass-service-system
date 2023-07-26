import styles from './Layout.module.css';
import { Menu, Header } from '../../components';
import { MenuActionClick } from '../../components/ui/Menu/Menu.props';
import { MenuStruct } from '../../components/ui/Menu/Menu.props';
import cn from 'classnames';
import { BiSolidDashboard } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { routerPrivate } from '../../routes/config.routes';
import { CgProfile } from 'react-icons/cg';
import { useSettings } from '../../hooks';

export interface LayoutProps {
  children?: React.ReactNode;
}

const menu: MenuStruct[] = [
  {
    text: 'Account',
    token: routerPrivate.ACCOUNT,
    icon: <CgProfile />,
  },
  {
    text: 'Projects',
    token: routerPrivate.PROJECTS,
    icon: <BiSolidDashboard />,
  },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { settings } = useSettings();
  const navigation = useNavigate();

  const onClick: MenuActionClick = (e) => {
    navigation(e.token);
  };

  return (
    <div
      className={cn(
        styles.page,
        { [styles.neomorphism]: settings.sbNeomorphism },
        {
          [styles.dark]: settings.theme === 'dark',
        }
      )}
    >
      <Header
        theme={settings.theme}
        neomorphism={settings.sbNeomorphism}
        className={styles.header}
      />
      <div className={styles.sidebar}>
        <Menu
          neomorphism={settings.sbNeomorphism}
          orientation="v"
          slim={settings.sidebarSlim}
          style={{ height: '100%' }}
          theme={settings.theme}
          actionOnClick={onClick}
          struct={menu}
        />
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: React.FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
