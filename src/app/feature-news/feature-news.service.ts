import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeatureNewsService {

  constructor(private _http:HttpClient) { }
  getFetureNews()
  {
   return this._http.get("http://api.mohamed-sadek.com/News/FeaturedNews");
  }
}
