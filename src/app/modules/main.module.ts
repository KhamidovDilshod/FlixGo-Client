import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import {HeaderComponent} from "./layout/header/header.component";
import { ContentComponent } from './layout/content/content.component';
import {SharedModule} from "./shared/shared.module";
import { CardComponent } from './layout/card/card.component';
import { SignUpComponent } from './layout/sign-up/sign-up.component';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ContentComponent,
    CardComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    NgOptimizedImage,
    NzModalModule,
    NzButtonModule,
    NzFormModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
