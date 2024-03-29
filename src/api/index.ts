import signUp from './autorization/signUp.api';
import logIn from './autorization/logIn.api';
import fetchGetAllProjectByUser from './projects/fetchGetAllProjectByUser.api';
import fetchInsertNewProjectByUser from './projects/fetchInsertNewProjectByUser';
import fetchInsertCreateTable from './tableSeatings/fetchInsertCreateTable.api';
import fetchSelectTable from './tableSeatings/fetchSelectTable.api';
import fetchDeletaTable from './tableSeatings/fetchDeleteTable.api';
import fetchUpdateTable from './tableSeatings/fetchUpdateTable.api';
import fetchInsertTags from './menu/fetchInsertTags.api';
import fetchSelectTags from './menu/fetchSelectTags.api';
import fetchDeleteTags from './menu/fetchDeleteTags.api';

export {
  signUp,
  logIn,
  fetchGetAllProjectByUser,
  fetchInsertNewProjectByUser,
  fetchInsertCreateTable,
  fetchSelectTable,
  fetchDeletaTable,
  fetchUpdateTable,
  fetchInsertTags,
  fetchSelectTags,
  fetchDeleteTags,
};
