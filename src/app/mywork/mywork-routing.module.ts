import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyworklistComponent } from 'myworklist/myworklist.component';
import { Y2020Component } from 'y2020/y2020.component';
import { Y2021Component } from 'y2021/y2021.component';
import { Y2022Component } from 'y2022/y2022.component';

const routes: Routes = [
{
  path:'',
  component: MyworklistComponent
},
{
  path:'y2020',
  component: Y2020Component
},
{
  path: 'y2021',
  component: Y2021Component
},
{
  path: 'y2022',
  component: Y2022Component
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyworkRoutingModule { }
