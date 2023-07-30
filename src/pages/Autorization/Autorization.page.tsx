import { Input, Button, Htag } from '../../components';
import {
  useAppDispatch,
  useAppSelector,
  useMessage,
  useModal,
} from '../../hooks';
import { autorizationSlice } from '../../store/autorization/autorization.slice';
import { withAuthLayout } from '../../layouts/AuthLayout/Auth.layout';
import { Link, useNavigate } from 'react-router-dom';
import { routerPublick, routerPrivate } from '../../routes/config.routes';
import { useEffect, useState } from 'react';
import styles from './Autorization.module.css';
import { authenticationSlice } from '../../store/authentication/authentication.slice';
import { IAuthenticationUserData } from '../../interfaces/Authentication.interface';
import { logIn } from '../../api';
import { useSettings } from '../../hooks';

const Autorization: React.FC = (): JSX.Element => {
  const { settings } = useSettings();

  const dispatch = useAppDispatch();
  const { email, password, processAutorization } = useAppSelector(
    (state) => state.autorizationReducer
  );
  const navigation = useNavigate();
  const { setEmail, setPassword, onCompleteLogIn } = autorizationSlice.actions;
  const { setAuthData } = authenticationSlice.actions;

  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [auth, setAuth] = useState<IAuthenticationUserData | null>(null);

  const { message, sendLoading, sendMessage, removeLoading } = useMessage(
    settings.theme
  );
  const { modal, getPresetModal } = useModal(settings.theme);

  useEffect(() => {
    if (processAutorization && auth) {
      sendMessage({ type: 'success', text: 'Авторизация' });
      if (loadingId) removeLoading(loadingId);
      dispatch(setAuthData({ ...auth }));
      setTimeout(() => {
        navigation(`${routerPrivate.PROJECTS}?id=${auth.user?.id}`);
      }, 1000);
    }
  }, [processAutorization, auth]);

  const onInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    dispatch(setEmail(email));
  };

  const onInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    dispatch(setPassword(password));
  };

  const handleSummit = async (e: any) => {
    const id = sendLoading({ text: 'Авторизация' });
    setLoadingId(id);
    e.preventDefault();
    try {
      const { data, error } = await logIn({
        email: email.value,
        password: password.value,
      });

      if (error) {
        throw error;
      } else {
        setAuth(data);
        dispatch(onCompleteLogIn(data));
      }
    } catch (error: any) {
      if (loadingId) removeLoading(loadingId);
      getPresetModal('errorS', `${error.message}`, `${error.status}`);
    }
  };

  return (
    <>
      <Htag theme={settings.theme} size="s" appearance="default">
        Авторизация
      </Htag>
      <Input
        theme={settings.theme}
        preFix={{ content: 'Email', appearence: 'ghost' }}
        value={email.value}
        onInput={onInputEmail}
      />
      <Input
        theme={settings.theme}
        preFix={{ content: 'Пароль', appearence: 'ghost' }}
        value={password.value}
        onInput={onInputPassword}
        type="password"
      />
      <div className={styles.controlls}>
        <Button
          text="Войти"
          size="m"
          style={{ width: '230px' }}
          appearence="primary"
          onClick={handleSummit}
        />
        <div className={styles.link}>
          <Link to={routerPublick.REGISTRATION}>{'Создать '}</Link>
          <span>новую учетную записть</span>
        </div>
      </div>
      {message}
      {modal}
    </>
  );
};

export default withAuthLayout(Autorization);
