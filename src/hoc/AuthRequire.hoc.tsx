import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { routerPublick } from '../routes/config.routes';

export interface AuthRequireProps {
  children: React.ReactNode;
}

const AuthRequire: React.FC<AuthRequireProps> = ({ children }) => {
  const { processAuth, data } = useAppSelector(
    (state) => state.authenticationReducer
  );
  
  if (processAuth || (data.user && data.session)) {
    return <>{children}</>;
  } else {
    return <Navigate to={routerPublick.AUTORIZATION} />;
  }
};

export default AuthRequire;
