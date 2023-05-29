import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import {HeaderComponent} from "./layout/header/header.component";
import { ContentComponent } from './layout/content/content.component';
import {SharedModule} from "./shared/shared.module";
import { CardComponent } from './layout/card/card.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ContentComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    NgOptimizedImage
  ]
})
export class MainModule { }
