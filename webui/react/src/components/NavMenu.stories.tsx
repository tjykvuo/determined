import React from 'react';

import { appRoutes, defaultAppRoute, defaultDetRouteId, detRoutes } from 'routes';
import RouterDecorator from 'storybook/RouterDecorator';
import { StoryMetadata } from 'storybook/types';

import NavMenu, { NavMenuType } from './NavMenu';

export default {
  component: NavMenu,
  decorators: [ RouterDecorator ],
  title: 'NavMenu',
} as StoryMetadata;

export const NavBarMenu = (): React.ReactNode => (
  <NavMenu defaultRouteId={defaultAppRoute.id} routes={appRoutes} />
);

NavBarMenu.story = {
  parameters: {
    backgrounds: [
      { default: true, name: 'dark background', value: '#111' },
    ],
  },
};

export const SideBarMenu = (): React.ReactNode => (
  <NavMenu defaultRouteId={defaultDetRouteId} routes={detRoutes} type={NavMenuType.SideBar} />
);

export const SideBarMenuIconOnly = (): React.ReactNode => (
  <NavMenu
    defaultRouteId={defaultDetRouteId}
    routes={detRoutes}
    type={NavMenuType.SideBarIconOnly} />
);
