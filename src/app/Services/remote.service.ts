import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(public httpClient:HttpClient) { }

  GetSpells():Observable<any>{
    // within the '' is the url of the api that you want to display
    return this.httpClient.get('https://www.dnd5eapi.co/api/spells/?');
  }
  GetMonsters():Observable<any>{
    // within the '' is the url of the api that you want to display
    return this.httpClient.get('https://www.dnd5eapi.co/api/monsters');
  }
  GetClasses():Observable<any>{
    // within the '' is the url of the api that you want to display
    return this.httpClient.get('https://www.dnd5eapi.co/api/classes');
  }
}
