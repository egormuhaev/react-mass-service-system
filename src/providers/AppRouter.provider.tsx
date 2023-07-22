import { Routes, Route } from 'react-router-dom';
import { routerPrivate, routerPublick } from '../routes/config.routes';
import Test from '../pages/Test';
import Autorization from '../pages/Autorization';
import Registration from '../pages/Registration';
import Main from '../pages/Main';

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path={routerPublick.TEST} element={<Test />} />
      <Route path={routerPublick.AUTORIZATION} element={<Autorization />} />
      <Route path={routerPublick.REGISTRATION} element={<Registration />} />
      <Route path={routerPrivate.MAIN} element={<Main />} />
    </Routes>
  );
};

export default AppRouter;
