import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HOME_ROUTING } from './home.routing';

@NgModule({
  imports: [
    HOME_ROUTING,
    CommonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
