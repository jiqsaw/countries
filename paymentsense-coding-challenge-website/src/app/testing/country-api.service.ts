import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  public getHealth(): Observable<string> {
    return of('Healthy');
  }
}
