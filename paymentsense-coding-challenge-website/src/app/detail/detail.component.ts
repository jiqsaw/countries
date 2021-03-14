import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { switchMap, take } from 'rxjs/operators';
import { ICountry } from '../models/country.model';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss']
})

export class DetailComponent implements OnInit {

  public faArrowAltCircleLeft = faArrowAltCircleLeft;
  public country: ICountry;

  constructor(
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.routeSubscribe();
  }

  public routeSubscribe(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap, i: number) => {
        const code = params.get('code');
        if (code) {
          return this.countryService.getCountryDetail(code);
        }
        return null;
      })
    )
      .pipe(take(1))
      .subscribe(
        res => this.country = res,
        _ => this.country = null
      );
  }

}
