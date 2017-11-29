import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment }        from '../../environments/environment';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()

export class ContentService{
    private ContentArray: any[];

  constructor(private http: Http) {console.log('Content Service Called.')}

  getPageText(arg: string){
    return this.http.get(environment.crud_php_api+'/umb_content/'+arg)
       .map(res => res.json());
  }
}
