import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FeatureNewsService } from './feature-news.service';
import { News } from '../top-news/news.models';
@Component({
  selector: 'app-feature-news',
  templateUrl: './feature-news.component.html',
  styleUrls: ['./feature-news.component.css']
})
export class FeatureNewsComponent implements OnInit {

  constructor(private _FeatureNewsService:FeatureNewsService,private _httpClient:HttpClient) { }
  news:News[]=[];
  ngOnInit() {
    this._FeatureNewsService.getFetureNews().subscribe(
      (response)=>this.news=response as News[],
      (error)=>{},
      ()=>{}
    )
  }

}
