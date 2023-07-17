import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tontine } from './tontine';


@Injectable({
  providedIn: 'root'
})
export class TontineService {
private baseURL = "http://localhost:8087/getAllTontine";

  constructor(private httpClient : HttpClient) { }

  getTontine():Observable<Tontine[]>{
    return this.httpClient.get<Tontine[]>(this.baseURL);
  }
  
}
