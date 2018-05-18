import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';

import { environment as ENV } from '../../environments/environment';
import { Geolocation } from '../models/geolocation.model';


@Injectable()
export class GeolocationService {

  public servicesGeolocationURL = `${ENV.route_api}/challenge`;
  constructor(private http: HttpClient) { }

//   public getClient(typeDocument: number, numberDocument: number) {
//     let url = `${this.servicesClientURL}?`;
//     url += `${typeDocument ? `typeDocument=${typeDocument}` : ''}`;
//     url += `${numberDocument ? `&numberDocument=${numberDocument}` : ''}`;

//     return this.http.get(url);
//   }

  public addGeolocation(geolocation:Geolocation){
    let url = `${this.servicesGeolocationURL}`;

    return this.http.post(url, geolocation);
  }

}
