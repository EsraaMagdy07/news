import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../top-news/news.models';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  news:News=new News();
  constructor(private _DetailsService:DetailsService, private _activatedRoute:ActivatedRoute) { }
 
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params=>{
      // this.news.ID=+params.get('id');
     this._DetailsService.getNewByID(params.get('id')).subscribe(
      
        (response)=>{ 
          this.news=response as News },
        (error)=>{console.log(error)},
        ()=>{}
      );
      // alert("_activatedRoute");
    });
  }

}
