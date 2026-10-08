import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  sendContact(data: any): Observable<any> {

    return of({
      success: true
    }).pipe(
      delay(1200)
    );

  }

}