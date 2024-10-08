import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SchoolsPageRoutingModule } from './schools-routing.module';
import { SchoolsPage } from './schools.page';
import { SharedModule } from 'src/app/layout/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SchoolsPageRoutingModule
  ],
  declarations: [SchoolsPage]
})
export class SchoolsPageModule {}
