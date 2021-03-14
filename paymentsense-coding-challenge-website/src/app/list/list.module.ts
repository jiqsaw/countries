import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { CountryService } from '../services/country.service';
import { ListComponent } from './list.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  exports: [],
  declarations: [ListComponent],
  providers: [
    CountryService
  ],
})
export class ListModule { }
