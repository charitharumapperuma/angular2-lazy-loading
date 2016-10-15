import { Routes, RouterModule } from '@angular/router';

/**
 * Created by Charith on 10/16/2016.
 */

const routes: Routes = [
  { path: '', loadChildren: './+home/home.module#HomeModule' },
  { path: 'about', loadChildren: './+about/about.module#AboutModule' },
];

export const APP_ROUTING = RouterModule.forRoot(
  routes
);
