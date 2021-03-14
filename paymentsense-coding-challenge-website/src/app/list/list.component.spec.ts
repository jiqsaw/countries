import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { CountryService } from '../services/country.service';
import { CountryApiService } from '../testing/mock-country-api.service';
import { ListComponent } from './list.component';

describe('ListComponent', () => {

  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: any;

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

    service = TestBed.get(CountryService);

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

  }));

  it('should create the list component', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    expect(service.getCountries).toHaveBeenCalled();
  });

  it(`should call search'`, () => {
    component.onSearchChange('tur');
    expect(component.params.q).toEqual('tur');
    expect(service.getCountries).toHaveBeenCalled();
    const filtered = component.countries.filter(e => !e.name.includes('tur'));
    expect(filtered.length).toEqual(0);
  });

});
