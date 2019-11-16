import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  contactId: string;
  contact: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.contactId = this.route.snapshot.paramMap.get('id');
    console.log(this.contactId);
    this.contact = this.db
      .collection('contacts')
      .doc<any>(this.contactId)
      .valueChanges()
      .pipe(
        tap(c =>
          this.seo.generateTags({
            title: c.name,
            description: c.bio,
            image: c.image,
          })
        )
      );
  }
}
