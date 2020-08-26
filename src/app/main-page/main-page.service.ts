import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MdData, Res } from '../Interface/md-data';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private http: HttpClient) { }

  baseUrl: string = `https://api.themoviedb.org/3/`;
  bannerDetails: MdData;

  getRows(fetchUrl: string) {
    return this.http.get<Res>(`${this.baseUrl}${fetchUrl}`)
  }
}
