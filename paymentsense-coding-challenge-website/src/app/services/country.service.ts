import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IResponseList } from '../models/api.model';
import { ICountry, ICountryParam } from '../models/country.model';

@Injectable()
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  public getCountries(params$?: Observable<ICountryParam>): Observable<IResponseList<ICountry>> {
    if (!params$ || params$ === null) {
      const reqUrl = `${environment.api}/countries`;
      return this.httpClient.get<IResponseList<ICountry>>(reqUrl);
    } else {
      return params$.pipe(
        debounceTime(environment.debounceDuration), distinctUntilChanged(),
        switchMap((params: ICountryParam) => {
          let reqUrl = `${environment.api}/countries?page=${params.page.toString()}&limit=${params.limit.toString()}`;
          if (params.q) {
            reqUrl += '&q=' + params.q;
          }
          return this.httpClient.get<IResponseList<ICountry>>(reqUrl);
        })
      );
    }
  }

  public getCountryDetail(code: string): Observable<ICountry> {
    const reqUrl = `${environment.api}/countries/${code}`;
    return this.httpClient.get<ICountry>(reqUrl);
  }

}
