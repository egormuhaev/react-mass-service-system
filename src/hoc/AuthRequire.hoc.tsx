import { Navigate, useLocation, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { routerPublick, queryParams } from '../routes/config.routes';

export interface AuthRequireProps {
  children: React.ReactNode;
}

const AuthRequire: React.FC<AuthRequireProps> = ({ children }) => {
  const { processAuth, data } = useAppSelector(
    (state) => state.authenticationReducer
  );

  const { pathname } = useLocation();

  const [searchParams] = useSearchParams();

  if (searchParams.get(queryParams.ID) === null && data.user) {
    return <Navigate to={`${pathname}?${queryParams.ID}=${data.user.id}`} />;
  }

  if (processAuth || (data.user && data.session)) {
    return <>{children}</>;
  } else {
    return <Navigate to={routerPublick.AUTORIZATION} />;
  }
};

export default AuthRequire;
