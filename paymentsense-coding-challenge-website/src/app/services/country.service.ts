import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICountry, ICountryParam } from '../models/country.model';

@Injectable()
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  public getCountries(params$?: Observable<ICountryParam>): Observable<ICountry[]> {
    if (!params$ || params$ === null) {
      const reqUrl = `${environment.api}/all`;
      return this.httpClient.get<ICountry[]>(reqUrl);
    } else {
      return params$.pipe(
        debounceTime(environment.debounceDuration), distinctUntilChanged(),
        switchMap((params: ICountryParam) => {
          let reqUrl = `${environment.api}/all?page=${params.page.toString()}&limit=${params.limit.toString()}`;
          if (params.q) {
            reqUrl += '&q=' + params.q;
          }
          return this.httpClient.get<ICountry[]>(reqUrl);
        })
      );
    }
  }

  public getCountryDetail(code: string): Observable<ICountry> {
    const reqUrl = `${environment.api}/alpha/${code}`;
    return this.httpClient.get<ICountry>(reqUrl);
  }

}
