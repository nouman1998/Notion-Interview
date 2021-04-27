import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
getAgenciesURL = "https://api.foia.gov/api/agency_components?&&fields[agency_component]=title,abbreviation,website,submission_address&page[limit]="

  constructor(private http: HttpClient) { }

  getAgencies(pageSize:number):Observable<any>{
    const apiHeaders = new HttpHeaders({'X-API-Key':environment.key});

    return this.http.get(this.getAgenciesURL+pageSize,{headers:apiHeaders})
  }

  getNextAgencies(url:string):Observable<any>{
    const apiHeaders = new HttpHeaders({'X-API-Key':environment.key});

    return this.http.get(url,{headers:apiHeaders})
  }

  getAgenciesDetail(url:string):Observable<any>{
    const apiHeaders = new HttpHeaders({'X-API-Key':environment.key});
    return this.http.get(url,{headers:apiHeaders})
  }

}
