import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { DetailListComponent } from './detail-list/detail-list.component';


const routes: Routes = [
  {path: '', component: DetailListComponent},
  {path: ':id', component: DetailPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
