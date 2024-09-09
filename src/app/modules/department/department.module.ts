import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DepartmentPageRoutingModule } from './department-routing.module';
import { DepartmentPage } from './department.page';
import { SharedModule } from 'src/app/layout/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DepartmentPageRoutingModule
  ],
  declarations: [DepartmentPage]
})
export class DepartmentPageModule {}
