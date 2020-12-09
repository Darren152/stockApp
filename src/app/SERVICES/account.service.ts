import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAccountyById(id: number): Observable<any>{
    return this.http.get<any>(this.URL + `/accounts/${id}`);
  }

  getAllAccounts(): Observable<any>{
    return this.http.get<any>(this.URL + `/accounts/`);
  }

  createAccount(account: Account): Observable<any>{
    return this.http.post<any>(this.URL + `/accounts/`, account);
  }

  deleteAccountById(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `/accounts/${id}`);
  }
}
