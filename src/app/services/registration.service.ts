import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
   private baseurl="https://sheetdb.io/api/v1/8g808cygsz67w"
  constructor(private http:HttpClient) { }
  onclick(register:Registration):Observable<any>{
    return this.http.post(this.baseurl,register)
  }
}
