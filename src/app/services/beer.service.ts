import { Beer } from './model/beer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  baseUrl = 'http://localhost:8080/api/v1/beerstock';

  constructor(
    private httpClient: HttpClient
  ) { }

  findAll(): Observable<Beer[]>{
    return this.httpClient.get<Beer[]>(this.baseUrl);
  }

  create(beer: Beer): Observable<Beer> {
    
    if(beer.id) {
      return this.httpClient.put<Beer>(this.baseUrl + `/${beer.id}`, beer);
    }
      return this.httpClient.post<Beer>(this.baseUrl, beer);
  }

  findById(id: number): Observable<Beer>{
    return this.httpClient.get<Beer>(this.baseUrl + `/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${id}`);
  }

}