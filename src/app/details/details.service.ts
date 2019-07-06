import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
   
constructor(private _http:HttpClient) { }
  getNewByID(id:string)
  {
    http://api.mohamed-sadek.com/GET-News-FeaturedNews
   return this._http.get("http://api.mohamed-sadek.com/News/item/"+id);
  }
}
