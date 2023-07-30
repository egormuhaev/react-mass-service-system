export const urlPath = (pathname: string, routes: string[]) => {
  for (const route of routes) {
    for (const path of pathname.split('/')) {
      if (path === route.replace('/', '')) return true;
    }
  }
  return false;
};