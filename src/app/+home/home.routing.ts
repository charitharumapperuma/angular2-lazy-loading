import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
/**
 * Created by Charith on 10/16/2016.
 */

const routes: Routes = [
  { path: '', component: HomeComponent },
];

export const HOME_ROUTING = RouterModule.forChild(
  routes
);
