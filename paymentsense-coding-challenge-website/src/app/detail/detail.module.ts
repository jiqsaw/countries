import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailComponent } from './detail.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [],
  declarations: [DetailComponent],
  providers: [],
})
export class DetailModule { }
