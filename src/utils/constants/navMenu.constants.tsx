import { MenuStruct } from '../../components/ui/Menu/Menu.props';
import { BiSolidDashboard } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsSharp } from 'react-icons/io5';
import { FaPeopleGroup } from 'react-icons/fa6';
import { MdOutlineTableBar, MdOutlineMenuBook } from 'react-icons/md';
import { BsPersonWorkspace } from 'react-icons/bs';
import { AiFillProject } from 'react-icons/ai';
import { routerPrivate, queryParams } from '../../routes/config.routes';

const menuStructFirst = (userId: string): MenuStruct[] => {
  return [
    {
      text: 'Акаунт',
      token: `${routerPrivate.ACCOUNT}?${queryParams.ID}=${userId}`,
      icon: <CgProfile />,
    },
    {
      text: 'Проекты',
      token: `${routerPrivate.PROJECTS}?${queryParams.ID}=${userId}`,
      icon: <BiSolidDashboard />,
    },
    {
      text: 'Настройки',
      token: `${routerPrivate.SETTINGS}?${queryParams.ID}=${userId}`,
      icon: <IoSettingsSharp />,
    },
  ];
};

const menuStructWorkspace = (projectID: string): MenuStruct[] => {
  return [
    {
      text: 'Проект',
      token: `${routerPrivate.PROJECT}?${queryParams.PROJECT_ID}=${projectID}`,
      icon: <AiFillProject />,
    },
    {
      text: 'Workspace',
      token: `${routerPrivate.WORKSPACE}?${queryParams.PROJECT_ID}=${projectID}`,
      icon: <BsPersonWorkspace />,
    },
    {
      text: 'Столы',
      token: `${routerPrivate.TABLE_SEATINGS}?${queryParams.PROJECT_ID}=${projectID}`,
      icon: <MdOutlineTableBar />,
    },
    {
      text: 'Меню',
      token: `${routerPrivate.MENU}?${queryParams.PROJECT_ID}=${projectID}`,
      icon: <MdOutlineMenuBook />,
    },
    {
      text: 'Сотрудники',
      token: `${routerPrivate.EMPLIYEES}?${queryParams.PROJECT_ID}=${projectID}`,
      icon: <FaPeopleGroup />,
    },
  ];
};

export { menuStructFirst, menuStructWorkspace };
