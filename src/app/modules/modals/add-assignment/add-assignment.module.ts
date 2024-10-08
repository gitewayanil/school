import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddAssignmentPageRoutingModule } from './add-assignment-routing.module';
import { AddAssignmentPage } from './add-assignment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddAssignmentPageRoutingModule
  ],
  declarations: [AddAssignmentPage]
})
export class AddAssignmentPageModule {}
