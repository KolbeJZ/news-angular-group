import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from 'src/app/interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  topHeadlines = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${environment.apiKey}`;
  search = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${environment.apiKey}`;

  constructor(private http: HttpClient) { }
  getArticles() {
    return this.http.get<Response>(this.topHeadlines);
  }
  searchArticles(input:string) {
    return this.http.get<Response>(`https://newsapi.org/v2/everything?q=${input}&apiKey=${environment.apiKey}`);
  }
}
