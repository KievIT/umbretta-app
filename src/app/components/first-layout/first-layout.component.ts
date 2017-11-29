import { Component, OnInit } from '@angular/core';
import {ContentType} from '../../models/contentType';
import { ContentService} from '../../services/content.service';

@Component({
  selector: 'first-layout',
  templateUrl: './first-layout.component.html',
  styleUrls: ['./first-layout.component.css'],
  providers: [ContentService]
})
export class FirstLayoutComponent implements OnInit {
  private imgMachine = require("assets/machine1.png");
  private content: ContentType ;
  private contentArray: ContentType[];

  constructor(private contentService: ContentService) {console.log('firtsLayout load...')}

  ngOnInit() {

    this.contentService.getPageText('1')
      .subscribe(Content => {this.content = Content; console.log(this.content);});
  }

}
