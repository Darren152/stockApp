import {Component, OnInit} from '@angular/core';
import {appleData, microsoftData, tesla, jpm} from "../../datasource";
import {PeriodsModel, StockChart} from "@syncfusion/ej2-angular-charts";
import {StockService} from "../../SERVICES/stock.service";
import {ActivatedRoute} from "@angular/router";

import {Marker}from "@syncfusion/ej2-maps";
@Component({
  selector: 'app-chart',
  // specifies the template string for the Charts component
  template:
    `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]="title" [crosshair]="crosshair"
  [tooltip]="tooltip" width='100%' height='550px'>
    <e-stockchart-series-collection>
      <e-stockchart-series [dataSource]='stockchartData' type="" type='Line' xName='date' High='high' Low='low' Open='open' Close ='close' [marker]="marker" Name='Apple'>

      </e-stockchart-series>
    </e-stockchart-series-collection>
  </ejs-stockchart>`
})
export class ChartComponent implements OnInit {

  // public data: DataManager;

  symbol = this.activatedRoute.snapshot.params[`symbol`]
  stocks : any;

  public primaryXAxis: any;
  public primaryYAxis: any;
  public tooltip: any;
  public title: string;
  public marker: any;
  public periods: PeriodsModel[];
  public stockchartData: any;
  public crosshair: any;

  public microsoft = "MSFT";
  public apple = "AAPL";
  public tesla = "TSLA"
  public jpm = "JPM"


  constructor(private stockService: StockService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    //Title for stock chart
    this.title = this.symbol;
    // this.stockChartData = this.getStockBySymbol(this.symbol);
    // this.stockChartData = this.dataManager

    // this.data = new DataManager({
    //   url: 'http://api.marketstack.com/v1/eod?date_to=2020-12-04&&access_key=d2b5d21e352fb8e24fbba8934e70ff22&symbols=JPM&date_from=2020-11-01',
    //   adaptor: new WebApiAdaptor()
    // });

    if(this.symbol == this.apple){
      this.stockchartData = appleData;
    }
    else if(this.symbol == this.microsoft){
      this.stockchartData = microsoftData;
    }
    else if(this.symbol == this.tesla){
      this.stockchartData = tesla;
    }
    else if(this.symbol == this.jpm){
      this.stockchartData = jpm;
    }


    this.primaryXAxis = {
      valueType: 'DateTime',
      crosshairTooltip: {enable: true}
    };
    this.primaryYAxis = {
      majorTickLines: { color: 'transparent', width: 0 },
      crosshairTooltip: {enable:true},

    };
    this.tooltip = { enable: true };
    // this.marker = { visible: true, width: 10, height: 10 };

    this.crosshair= {
      enable: true
    };

    this.periods = [
      { intervalType: 'Minutes', interval: 1, text: '1m' },
      { intervalType: 'Minutes', interval: 30, text: '30m' },
      { intervalType: 'Hours', interval: 1, text: '1H' },
      { intervalType: 'Hours', interval: 12, text: '12H', selected: true },
      { intervalType: 'Auto', text: '1D' }
    ];
  }

  getStockBySymbol(symbol: string){
    this.stockService.getASingleStockData(symbol).subscribe(
      data => {
        this.stocks = data;
        console.log(data);
      }
    )
  }

}
