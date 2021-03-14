import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { clone } from 'lodash';
import { Subject } from 'rxjs';
import { CountryService } from 'src/app/services/country.service';
import { environment } from 'src/environments/environment';
import { ICountry, ICountryParam } from '../models/country.model';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})

export class ListComponent implements OnInit {

  public faSearch = faSearch;
  public countries: ICountry[];
  public q = '';
  public params: ICountryParam = { page: 1, limit: environment.pageLimit };
  public params$ = new Subject<ICountryParam>();
  public total: number;

  constructor(private countryService: CountryService) { }

  public ngOnInit(): void {
    this.loadCountries();
  }

  public loadCountries(): void {
    this.countryService.getCountries(this.params$)
      .subscribe(
        res => {
          this.countries = res.data;
          this.total = res.meta.total;
        },
        _ => this.countries = null
      );
    this.params$.next(this.params);
  }

  public onSearchChange(q: string): void {
    this.params.q = q;
    this.params$.next(clone(this.params));
  }

  getPage(page: number) {
    this.countries = undefined;
    this.params.page = page;
    this.params$.next(clone(this.params));
  }

}
