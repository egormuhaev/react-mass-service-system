import { Button } from '../../components';
import { Link } from 'react-router-dom';
import { routerPublick } from '../../routes/config.routes';

const Preview: React.FC = () => {
  return (
    <>
      <Link to={routerPublick.REGISTRATION}>
        <Button text="Регистрация" size="l" appearence="primary" />
      </Link>
      <Link to={routerPublick.AUTORIZATION}>
        <Button text="Войти" size="l" appearence="primary" />
      </Link>
    </>
  );
};

export default Preview;
