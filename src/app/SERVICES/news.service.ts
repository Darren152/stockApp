import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getNewsArticleBySymbol(symbol: string): Observable<any>{
    return this.http.get<any>(this.URL + `/article/${symbol}`);
  }

  // getNewsArtticleImageBySymbol(symbol: string): Observable<any>{
  //   return this.http.get<any>(this.URL + `/article-image/`);
  // }

  getAllArticles(): Observable<any>{
    return this.http.get<any>(this.URL + `/articles/`);
  }

}
