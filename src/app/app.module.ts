import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AreaSeriesService,
  CandleSeries, ColumnSeriesService,
  CrosshairService,
  DateTimeCategoryService, PeriodSelectorService, RangeAreaSeriesService, RangeNavigatorModule, ScatterSeriesService,
  StockChartModule,
  StripLineService, TmaIndicatorService, TooltipSettings, TrendlinesService
} from '@syncfusion/ej2-angular-charts';
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import { ChartModule } from "@syncfusion/ej2-angular-charts";

// import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, CandleSeriesService} from '@syncfusion/ej2-angular-charts';
import { CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { ChartComponent } from './COMPONENTS/chart/chart.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { ProfilePageComponent } from './COMPONENTS/profile-page/profile-page.component';
import {NavbarComponent} from "./COMPONENTS/nav-bar/nav-bar.component";
import {HttpClientModule} from "@angular/common/http";
import {ControlContainer, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewsComponent } from './COMPONENTS/news/news.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    HomeComponent,
    ProfilePageComponent,
    NavbarComponent,
    NewsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockChartModule,
    ChartAllModule,
    StockChartAllModule,
    ChartModule,
    RangeNavigatorModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [DateTimeService, LegendService, TooltipService, DataLabelService, CandleSeriesService,
    CategoryService, LineSeriesService, CrosshairService, StripLineService,TooltipSettings,
  DateTimeCategoryService, CandleSeriesService, AreaSeriesService, PeriodSelectorService,
  ColumnSeriesService, RangeAreaSeriesService, TmaIndicatorService, ScatterSeriesService,
  TrendlinesService, CandleSeries],
  bootstrap: [AppComponent]
})
export class AppModule { }
