import { Component, OnInit } from '@angular/core';
import { TopService } from './top.service';
import { HttpClient } from '@angular/common/http';
import { News } from './news.models';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {

  constructor(private _topService:TopService,private _httpClient:HttpClient) { }
news:News[]=[];
  ngOnInit() {
    debugger;
    this._topService.getTopNews().subscribe(
      (response)=>this.news=response as News[],
      (error)=>{},
      ()=>{}
    )
  }

}
