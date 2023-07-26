import { useAppDispatch, useAppSelector } from './useRedux';
import { settingsSlice } from '../store/settings/settings.slice';
import { Theme } from '../interfaces/Settings.interface';

const useSettings = () => {
  const dispatch = useAppDispatch();
  const { theme, sidebarSlim, sidebarNeomorphism } = useAppSelector(
    (state) => state.settingsReducer
  );
  const { setTheme, setSidebarSlim, setSidebarNeomorphism } =
    settingsSlice.actions;

  return {
    settings: {
      theme,
      sidebarSlim: sidebarSlim,
      sbNeomorphism: sidebarNeomorphism,
    },
    controlls: {
      setTheme: (val: Theme) => {
        dispatch(setTheme(val));
      },

      setSidebarSlim: (val: boolean) => {
        if (!val) {
          dispatch(setSidebarNeomorphism(val));
        }
        dispatch(setSidebarSlim(val));
      },

      setSidebarNeomorphism: (val: boolean) => {
        if (val) {
          dispatch(setSidebarSlim(true));
        }
        dispatch(setSidebarNeomorphism(val));
      },
    },
  };
};

export default useSettings;
