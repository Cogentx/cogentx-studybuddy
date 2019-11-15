import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { DetailListComponent } from './detail-list/detail-list.component';


@NgModule({
  declarations: [DetailPageComponent, DetailListComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
