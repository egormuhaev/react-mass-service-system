import { Input, Button, Htag } from '../components';
import { useAppDispatch, useAppSelector, useMessage, useModal } from '../hooks';
import { autorizationSlice } from '../store/autorization/autorization.slice';
import supabase from '../supabase/supabase.config';
import { withAuthLayout } from '../layouts/AuthLayout/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { routerPublick, routerPrivate } from '../routes/config.routes';
import { useEffect, useState } from 'react';
import styles from '../styles/Autorization.module.css';
import { authenticationSlice } from '../store/authentication/authentication.slice';
import { IAuthenticationUserData } from '../interfaces/Authentication.interface';

const Autorization: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { email, password, processAutorization } = useAppSelector(
    (state) => state.autorizationReducer
  );

  const navigation = useNavigate();
  const { setEmail, setPassword, onCompleteLogIn } = autorizationSlice.actions;
  const { setAuthData } = authenticationSlice.actions;

  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [auth, setAuth] = useState<IAuthenticationUserData | null>(null);

  const { message, sendLoading, sendMessage, removeLoading } =
    useMessage('light');
  const { modal, getPresetModal } = useModal();

  useEffect(() => {
    if (processAutorization && auth) {
      sendMessage({ type: 'success', text: 'Авторизация' });
      if (loadingId) removeLoading(loadingId);
      setAuthData(auth);
      setTimeout(() => {
        navigation(routerPrivate.MAIN);
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
      const { data, error } = await supabase.auth.signInWithPassword({
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
      getPresetModal('errorS', error as string, 'Ошибка авторизации');
    }
  };

  return (
    <>
      <Htag size="s" appearance="default">
        Авторизация
      </Htag>
      <Input
        preFix={{ content: 'Email', appearence: 'ghost' }}
        value={email.value}
        onInput={onInputEmail}
      />
      <Input
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
