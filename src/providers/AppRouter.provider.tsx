import { Routes, Route } from 'react-router-dom';
import { routerPrivate, routerPublick } from '../routes/config.routes';
import Account from '../pages/Account/Account';
import Autorization from '../pages/Autorization/Autorization.page';
import Registration from '../pages/Registration/Registration.page';
import Dashboard from '../pages/Projects/Projects.page';
import AuthRequire from '../hoc/AuthRequire.hoc';
import Preview from '../pages/Preview/Preview.page';
import Settings from '../pages/Settings/Settings';

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Preview />} />
      <Route path={routerPublick.AUTORIZATION} element={<Autorization />} />
      <Route path={routerPublick.REGISTRATION} element={<Registration />} />
      <Route
        path={routerPrivate.PROJECTS}
        element={
          <AuthRequire>
            <Dashboard />
          </AuthRequire>
        }
      />
      <Route
        path={routerPrivate.ACCOUNT}
        element={
          <AuthRequire>
            <Account />
          </AuthRequire>
        }
      />
      <Route
        path={routerPrivate.SETTINGS}
        element={
          <AuthRequire>
            <Settings />
          </AuthRequire>
        }
      />
    </Routes>
  );
};

export default AppRouter;
