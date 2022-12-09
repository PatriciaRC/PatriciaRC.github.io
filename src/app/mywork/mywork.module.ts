import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyworkRoutingModule } from './mywork-routing.module';
import { Y2020Component } from './y2020/y2020.component';
import { Y2021Component } from './y2021/y2021.component';
import { Y2022Component } from './y2022/y2022.component';


@NgModule({
  declarations: [
    Y2020Component,
    Y2021Component,
    Y2022Component,
  ],
  imports: [
    CommonModule,
    MyworkRoutingModule
  ]
})
export class MyworkModule { }
