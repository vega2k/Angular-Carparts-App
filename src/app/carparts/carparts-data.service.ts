import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarPart} from './car-part';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable(/*{
  providedIn : 'root'
}*/)
export class CarpartsDataService {

  constructor(private httpClient: HttpClient) {
    console.log('CarpartsDataService consturctor called..');
  }

  getCarParts(): Observable<any> {
    return this.httpClient.get('assets/car-part.json',
      {responseType: 'json'});
  }

  getCarPartsPromise() : Promise<CarPart[]> {
    return this.httpClient.get('http://127.0.0.1:52274/data.json')
                          .toPromise()
                          .then(res => res['data'])
                          .catch(err => console.log('Error 발생',err));
  }

  addCarPart(carPart: CarPart): Observable<CarPart> {
    carPart.id = Number(carPart.id);
    return this.httpClient.post<CarPart>('http://127.0.0.1:52274/products', carPart, httpOptions);
  }
}
