import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppCommonModule } from '../../app-common.module';
import { DetailComponent } from './detail.component';


const  route: Routes = [
    {
        path: '',
        component: DetailComponent
    }
];

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    RouterModule.forChild(route),
  ],
  exports: [
  ]
})
export class DetailModule { }