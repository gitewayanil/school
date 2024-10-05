import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadCsvMasterPageRoutingModule } from './upload-csv-master-routing.module';

import { UploadCsvMasterPage } from './upload-csv-master.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadCsvMasterPageRoutingModule
  ],
  declarations: [UploadCsvMasterPage]
})
export class UploadCsvMasterPageModule {}
