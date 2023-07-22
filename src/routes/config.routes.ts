export interface IRouterPublic {
  TEST: string;
  AUTORIZATION: string;
  REGISTRATION: string;
}

export interface IRouterPrivate {
  MAIN: string;
}

export const routerPublick: IRouterPublic = {
  TEST: '/',
  AUTORIZATION: '/autorization',
  REGISTRATION: '/registration',
};

export const routerPrivate: IRouterPrivate = {
  MAIN: '/main',
};
