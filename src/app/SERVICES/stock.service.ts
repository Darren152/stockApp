import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private Symbols = "AAPL,MSFT,JPM";
  private _Symbols = "BAC,AMZN,BLK,SLM,JPM,TSLA,BABA,GOOGL,GOOG,NFLX,INTC,FB,CSCO," +
    "QCOM,CRM,ZM,ISRG,AMD,SPLK,F,GM,BEST,HMC,FCAU,RACE,VWAGY,BMWYY,KMX;"
  private URL = 'http://api.marketstack.com/v1/intraday/latest?';
  private _URL = 'http://api.marketstack.com/v1/intraday?';
  private accessKey = 'access_key=d2b5d21e352fb8e24fbba8934e70ff22';

  constructor(private http: HttpClient) { }

  getAllStocksData(): Observable<any>{
    return this.http.get<any>(this.URL + this.accessKey + (`&symbols=${this.Symbols}`+`&interval=1hour`));
  }

  getASingleStockData(Symbol: string){
    return this.http.get(this._URL + this.accessKey + (`&symbols=${Symbol}`+`&date_from=2020-11-01`+`&interval=1hour`))
      .map(result => result);
  }

}
