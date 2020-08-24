import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MdData } from '../Interface/md-data';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private http: HttpClient) { }

  baseUrl: string = `https://api.themoviedb.org/3/`;

  getRows(fetchUrl: string) {
    console.log(fetchUrl);
    return this.http.get<MdData>(`${this.baseUrl}${fetchUrl}`)
  }
}
