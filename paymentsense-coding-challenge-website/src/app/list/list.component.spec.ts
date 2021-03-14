import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { CountryService } from '../services/country.service';
import { CountryApiService } from '../testing/country-api.service';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        FontAwesomeModule,
        NgxPaginationModule
      ],
      declarations: [
        ListComponent
      ],
      providers: [
        { provide: CountryService, useClass: CountryApiService }
      ]
    }).compileComponents();
  }));

  it('should create the list component', () => {
    const fixture = TestBed.createComponent(ListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'Paymentsense Coding Challenge'`, () => {
  //   const fixture = TestBed.createComponent(HeaderComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   console.log('app:', app)
  //   expect(app.title).toEqual('Paymentsense Coding Challenge!');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Paymentsense Coding Challenge!');
  // });
});
