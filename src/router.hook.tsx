import * as React from 'react';
export enum Pages {
  MAIN = '',
  MINIMIZATION = 'minimize',
}

interface Route {
  page: Pages;
  params: any;
}

class Router {
  private location: Location;
  constructor() {
    this.location = window.location;
    if (!this.location.hash) {
      this.location.hash = '/';
    }
  }
  setUrl(route: Route) {
    const {page, params} = route;
    let url = '';
    switch (route.page) {
      case Pages.MAIN:
        url = `/${page}`;
        break;
      case Pages.MINIMIZATION:
        if (params.functionId === undefined) {
          break;
        }
        url = `/${page}/${params.functionId}`;
        break;
      default:
        url = `/${Pages.MAIN}`;
        break;
    }
    this.location.hash = url;
  }
  getRouteFromUrl(): Route {
    let [page, ...params] = this.location.hash.substring(2).split('/'); //remove '#/'from url
    let route: Route;
    switch (page) {
      case Pages.MAIN:
        route = {page, params: {}};
        break;
      case Pages.MINIMIZATION:
        if (params.length === 1 && !isNaN(parseInt(params[0]))) {
          route = {
            page,
            params: {
              functionId: parseInt(params[0]),
            },
          };
        } else {
          route = this.setMainRoute();
        }
        break;
      default:
        route = this.setMainRoute();
        break;
    }
    return route;
  }
  private setMainRoute() {
    this.location.hash = `/${Pages.MAIN}`;
    return {page: Pages.MAIN, params: {}};
  }
}
const router = new Router();

export const useRouter = (): [
  Route,
  React.Dispatch<React.SetStateAction<Route>>
] => {
  const [route, setRoute] = React.useState(router.getRouteFromUrl());
  React.useEffect(() => router.setUrl(route));
  return [route, setRoute];
};
