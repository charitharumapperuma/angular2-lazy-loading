import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { ABOUT_ROUTING } from './about.routing';

@NgModule({
  imports: [
    ABOUT_ROUTING,
    CommonModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
