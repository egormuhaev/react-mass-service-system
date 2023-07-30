import styles from './Layout.module.css';
import { Menu, Header } from '../../components';
import {
  MenuActionClick,
  MenuStruct,
} from '../../components/ui/Menu/Menu.props';
import cn from 'classnames';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useSettings } from '../../hooks';
import {
  menuStructFirst,
  menuStructWorkspace,
} from '../../utils/constants/navMenu.constants';
import { urlPath } from '../../utils/helpers/urlPath.helpers';
import { routerPrivate, queryParams } from '../../routes/config.routes';
import { useEffect, useState } from 'react';

export interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { settings } = useSettings();
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const [menu, setMenu] = useState<MenuStruct[]>([]);
  const [searchParams] = useSearchParams();

  const userID = searchParams.get(queryParams.ID);
  const projectID = searchParams.get(queryParams.PROJECT_ID);

  const onClick: MenuActionClick = (e) => {
    navigation(e.token);
  };

  useEffect(() => {
    if (
      urlPath(pathname, [
        routerPrivate.ACCOUNT,
        routerPrivate.PROJECTS,
        routerPrivate.SETTINGS,
      ]) &&
      userID
    ) {
      setMenu(menuStructFirst(userID));
    }
    if (
      urlPath(pathname, [
        routerPrivate.PROJECT,
        routerPrivate.EMPLIYEES,
        routerPrivate.TABLE_SEATINGS,
        routerPrivate.WORKSPACE,
        routerPrivate.MENU,
      ]) &&
      projectID
    ) {
      setMenu(menuStructWorkspace(projectID));
    }
  }, [pathname]);

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
