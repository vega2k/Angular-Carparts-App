import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class RacesDataService {
  constructor(private httpClient: HttpClient) {
    console.log('RacesDataService consturctor called..');
  }

  getRaces(): Observable<any> {
    return this.httpClient.get('assets/races.json',
      {responseType: 'json'});
  }
}
