import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then((m) => m.AuthPage),
  },
  // {
  //   path: 'places',
  //   loadComponent: () =>
  //     import('./places/places.page').then((m) => m.PlacesPage),
  // },
  {
    path: 'place-detail',
    loadComponent: () =>
      import('./places/place-detail/place-detail.page').then(
        (m) => m.PlaceDetailPage
      ),
  },
  {
    path: 'offers',
    loadComponent: () =>
      import('./offers/offers.page').then((m) => m.OffersPage),
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'places',
        loadComponent: () =>
          import('./places/places.page').then((m) => m.PlacesPage),
      },
      {
        path: 'offers',
        loadComponent: () =>
          import('./offers/offers.page').then((m) => m.OffersPage),
      },
    ],
  },
  {
    path: 'places',
    redirectTo: '/tabs/places',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
  },
  {
    path: 'brunei',
    loadComponent: () => import('./brunei/brunei.page').then( m => m.BruneiPage)
  },
  {
    path: 'tutong',
    loadComponent: () => import('./tutong/tutong.page').then( m => m.TutongPage)
  },
  {
    path: 'temburong',
    loadComponent: () => import('./temburong/temburong.page').then( m => m.TemburongPage)
  },
  {
    path: 'belait',
    loadComponent: () => import('./belait/belait.page').then( m => m.BelaitPage)
  },
];