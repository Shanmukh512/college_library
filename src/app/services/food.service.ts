import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  private baseurl="https://sheetdb.io/api/v1/ywyvy9kt8s7mw";
  onsubmit():Observable<Food[]>{
    return this.http.get<Food[]>(this.baseurl);
  }
}
