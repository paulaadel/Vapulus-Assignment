import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WookieServiceService {
  myUrl="https://wookie.codesubmit.io/movies";
  constructor(public _HttpClient:HttpClient) { }

  Movies():Observable<any>{
  const httpHeaders = new HttpHeaders({
    'Authorization':'Bearer Wookie2019'
  });

    return this._HttpClient.get(this.myUrl, {headers:httpHeaders});
  }
  searchMovie(search_term: string): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Authorization':'Bearer Wookie2019'
    });

    return this._HttpClient.get(this.myUrl+'?q='+search_term, {headers:httpHeaders});
  }
}

