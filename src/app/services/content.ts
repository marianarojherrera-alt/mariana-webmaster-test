import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Content {
  constructor(private http: HttpClient) {}

  getContent(): Observable<any> {
    return this.http.get('/assets/content.json');
  }
}