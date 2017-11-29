import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NavitemsService {

  constructor(private http: HttpClient) { }

  getNavItems(){
    return this.http.get('assets/navitems.json')
  }

}
