import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import {HeaderComponent} from "./layout/header/header.component";
import { ContentComponent } from './layout/content/content.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
