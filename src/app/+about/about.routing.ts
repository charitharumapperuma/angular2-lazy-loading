import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
/**
 * Created by Charith on 10/16/2016.
 */

const routes: Routes = [
  { path: '', component: AboutComponent },
];

export const ABOUT_ROUTING = RouterModule.forChild(
  routes
);
