import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService {

  private URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCompanyInfoBySymbol(symbol: string): Observable<any>{
    return this.http.get<any>(this.URL + `/company/${symbol}`)
  }

}
