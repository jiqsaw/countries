import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsenseCodingChallengeApiService {

  constructor(private httpClient: HttpClient) { }

  public getHealth(): Observable<string> {
    return this.httpClient.get('http://localhost:44341/health', { responseType: 'text' });
  }

}
