
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  contacts;

  constructor(
    private seo: SeoService,
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'Contacts',
      description: 'Friends, Family, Pizza, Other...',
    });

    this.contacts = this.db.collection('contacts').valueChanges({ idField: 'id'});
  }

}
