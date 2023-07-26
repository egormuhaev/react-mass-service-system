import {
  Input,
  InputEmail,
  Button,
  Htag,
  InputPassword,
  PasswordComplexityRecommed,
} from '../../components';
import {
  useAppDispatch,
  useAppSelector,
  useMessage,
  useModal,
  useSettings,
} from '../../hooks';
import { registrationSlice } from '../../store/registration/registration.slice';
import { signUp } from '../../api';
import { withAuthLayout } from '../../layouts/AuthLayout/Auth.layout';
import { routerPublick } from '../../routes/config.routes';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Registration.module.css';

const Registration: React.FC = (): JSX.Element => {
  const { settings } = useSettings();
  const { email, password, username, processRegistration } = useAppSelector(
    (state) => state.registrationReducer
  );

  const dispatch = useAppDispatch();
  const { setEmail, setUsername, setPassword, onCompleteSignUp } =
    registrationSlice.actions;
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const { modal, getPresetModal } = useModal(settings.theme);
  const { message, sendLoading, sendMessage, removeLoading } = useMessage(
    settings.theme
  );

  useEffect(() => {
    if (processRegistration) {
      sendMessage({ type: 'success', text: 'Регистрация' });
      if (loadingId) removeLoading(loadingId);
      getPresetModal(
        'successS',
        `Мы отправили письмо на почту ${email.value} для подтверждения вашей учетной записи. Если письмо не пришло, нажмите сюда.`,
        'Регистрация прошла успешно!'
      );
    }
  }, [processRegistration]);

  const onInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    dispatch(setEmail(email));
  };

  const onInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    dispatch(setPassword(password));
  };

  const onInputUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const usernaem = e.target.value;
    dispatch(setUsername(usernaem));
  };

  const handleSummit = async (e: any) => {
    e.preventDefault();

    if (email.status && password.status) {
      const id = sendLoading({ text: 'Регистрация' });
      setLoadingId(id);
      try {
        const { data, error } = await signUp({
          email: email.value,
          password: password.value,
          username: username.value,
        });

        if (error) {
          throw error;
        } else {
          dispatch(onCompleteSignUp(data));
        }
      } catch (error: any) {
        getPresetModal(
          'errorS',
          error.message ??
            'Во время регистрация произошла ошибка. Повторите попытку позже',
          `${error.status}: Ошибка регистрации`
        );
        if (loadingId) removeLoading(loadingId);
      }
    }
  };

  return (
    <>
      <Htag theme={settings.theme} size="s" appearance="default">
        Регистрация
      </Htag>
      <Input
        theme={settings.theme}
        preFix={{ content: 'Username', appearence: 'ghost' }}
        value={username.value}
        onInput={onInputUsername}
      />
      <InputEmail
        theme={settings.theme}
        value={email.value}
        onInput={onInputEmail}
        status={email.status}
      />
      <InputPassword
        theme={settings.theme}
        status={password.status}
        value={password.value}
        onInput={onInputPassword}
        complexity={password.complexity}
      />
      <PasswordComplexityRecommed
        password={password.value}
        theme={settings.theme}
      />
      <div className={styles.controlls}>
        <Button
          text="Регистрация"
          size="m"
          style={{ width: '230px' }}
          appearence="primary"
          onClick={handleSummit}
        />
        <div className={styles.link}>
          <Link to={routerPublick.AUTORIZATION}>{'Войти '}</Link>
          <span>в учетную записть</span>
        </div>
      </div>

      {modal}
      {message}
    </>
  );
};

export default withAuthLayout(Registration);
