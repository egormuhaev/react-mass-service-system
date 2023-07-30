import { Navigate, useLocation, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import {
  routerPublick,
  queryParams,
  routerPrivate,
} from '../routes/config.routes';

export interface AuthRequireProps {
  children: React.ReactNode;
}

const AuthWorkspaceRequire: React.FC<AuthRequireProps> = ({ children }) => {
  const { processAuth, data } = useAppSelector(
    (state) => state.authenticationReducer
  );

  // const { pathname } = useLocation();

  const [searchParams] = useSearchParams();

  // if (searchParams.get(queryParams.PROJECT_ID) === null && data.user) {
  //   return (
  //     <Navigate to={`${pathname}${queryParams.PROJECT_ID}${data.user.id}`} />
  //   );
  // }

  if (
    searchParams.get(queryParams.PROJECT_ID) &&
    data.user &&
    data.session &&
    processAuth
  ) {
    return <>{children}</>;
  } else if (data.user) {
    return <Navigate to={routerPrivate.PROJECTS} />;
  } else {
    return <Navigate to={routerPublick.AUTORIZATION} />;
  }
};

export default AuthWorkspaceRequire;
