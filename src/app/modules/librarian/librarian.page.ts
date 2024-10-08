import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/core/services/data.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { SchoolDataService } from 'src/app/core/services/school-data.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AddUserMasterPage } from '../modals/add-user-master/add-user-master.page';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.page.html',
  styleUrls: ['./librarian.page.scss'],
})
export class LibrarianPage implements OnInit {

librarianList:any;
search:any;
formData:any;  
role:any;

constructor(private http: HttpClient, private toastService: ToastService, private fetch: SchoolDataService, private loader: LoaderService, private data: DataService, private modalController: ModalController) {}

ngOnInit() {
  this.data.role$.subscribe(role => {
    this.role = role;
  });
  this.formData = new FormData();

  this.formData.append('user_type', "librarian");
  this.list(this.formData);
}

list(data:any){
  this.loader.present();
  this.fetch.viewUserMaster(data).subscribe({
    next:(res:any) => {
    if(res.code == 200){
      this.loader.dismiss();
        this.librarianList = res.data;
      }
      else{
        this.librarianList = "";
      }
      this.loader.dismiss();
    },
    error: (error:any) => {
      this.loader.dismiss();
    }
  });
}

searchRes() {

  this.librarianList = this.librarianList.filter((item: { name: string }) => item.name.toLowerCase().includes(this.search.toLowerCase()));
}

searchCancel(){
  this.search = "";
  this.formData = new FormData();
  this.formData.append('user_type', this.role);
  this.list(this.formData);
}

delete(id: any) {
  this.data.presentAlertConfirm().then((res) => {
    if (res == true) {
      const formData = new FormData();
      formData.append('id', id);
      formData.append('user_type', 'librarian');
      this.fetch.userDelete(formData).subscribe({
        next: (res: any) => {
          if (res.code == 200) {
            this.toastService.presentToast(res.response);
            this.ngOnInit();
          } else {
            this.toastService.presentErrorToast(res.response);
          }
        },
        error: (error: any) => {
        }
      });
    }
  });
}

async openEditModal(item:any) {
  const modal = await this.modalController.create({
    component: AddUserMasterPage,
    cssClass: '',
    componentProps: {
      title: "Edit Librarian",
      addUserType:'librarian',
      editUserData:item
    }
  });
  modal.onDidDismiss().then((dataReturned:any) => {
    this.ngOnInit();
  });

  return await modal.present();
}

async openAddModal() {
  const modal = await this.modalController.create({
    component: AddUserMasterPage,
    cssClass: '',
    componentProps: {
      title: "Add Librarian",
      addUserType:'librarian',
    }
  });
  modal.onDidDismiss().then((dataReturned) => {
    this.ngOnInit();
  });
  return await modal.present();
}

}
