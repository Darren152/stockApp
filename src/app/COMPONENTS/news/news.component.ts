import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../SERVICES/news.service";
import {NewsArticleModel} from "../../MODELS/NewsArticleModel";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  news : NewsArticleModel[];

  symbol = this.activatedRoute.snapshot.params[`symbol`]

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles(){
    this.newsService.getAllArticles().subscribe(
      data => {
        this.news = data
        console.log(data)
      }
    )
  }

}
