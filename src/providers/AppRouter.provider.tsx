import { Routes, Route } from 'react-router-dom';
import { routerPrivate, routerPublick } from '../routes/config.routes';
import Account from '../pages/Account/Account.page';
import Autorization from '../pages/Autorization/Autorization.page';
import Registration from '../pages/Registration/Registration.page';
import Projects from '../pages/Projects/Projects.page';
import AuthRequire from '../hoc/AuthRequire.hoc';
import AuthWorkspaceRequire from '../hoc/AuthWorkspaceRequire.hoc';
import Preview from '../pages/Preview/Preview.page';
import Settings from '../pages/Settings/Settings.page';
import Project from '../pages/Project/Project.page';
import TableSeatings from '../pages/TableSeatings/TableSeatings.page';

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Preview />} />
      <Route path={routerPublick.AUTORIZATION} element={<Autorization />} />
      <Route path={routerPublick.REGISTRATION} element={<Registration />} />
      <Route
        path={routerPrivate.PROJECT}
        element={
          <AuthWorkspaceRequire>
            <Project />
          </AuthWorkspaceRequire>
        }
      />
      <Route
        path={routerPrivate.PROJECTS}
        element={
          <AuthRequire>
            <Projects />
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
      <Route
        path={routerPrivate.TABLE_SEATINGS}
        element={
          <AuthWorkspaceRequire>
            <TableSeatings />
          </AuthWorkspaceRequire>
        }
      />
    </Routes>
  );
};

export default AppRouter;
