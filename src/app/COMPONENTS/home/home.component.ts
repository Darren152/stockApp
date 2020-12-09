import { Component, OnInit } from '@angular/core';
import {StockService} from "../../SERVICES/stock.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StockModel} from "../../MODELS/StockModel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stocks : StockModel[];

  emptyArray: StockModel[] = [];
  constructor(private stockService: StockService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.filteredStocks = this.stocks;
    this.listFilter;
  }

  filteredStocks: StockModel[];

  private _listFilter: string;

  get listFilter (): string {
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    if(this._listFilter === ''){
      this.refreshStockList();
    }
    this.stocks = this.listFilter ? this.performFilter(this.listFilter): this.stocks;
  }

  performFilter(filterBy: string){
    filterBy = filterBy.toLocaleUpperCase();
    return this.stocks.filter((stock: StockModel)=>
      stock.exchange.toLocaleUpperCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.refreshStockList();

  }

  refreshStockList(){
    this.stockService.getAllStocksData().subscribe(
      data => {
        this.stocks = data.data;
        console.log(data.data);
      }
    )
  }

}
