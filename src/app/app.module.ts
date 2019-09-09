import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent }     from './add/add.component';
import { EditComponent }     from './edit/edit.component';
import { CutTextPipe } from './pipes/limit-text.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { FormatValuePipe } from './pipes/format-value.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { dateValidatorDirective } from './directives/date-validator.directive';
import { dateEmptyValidatorDirective } from './directives/date-empty-validator.directive';
import { typeEmptyValidatorDirective } from './directives/type-empty-validator.directive';
import { textEmptyValidatorDirective } from './directives/text-empty-validator.directive';
import { valueStructuralValidatorDirective } from './directives/value-structural-validator.directive'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    EditComponent,
    CutTextPipe,
    FormatDatePipe,
    FormatValuePipe,
    OrderByPipe,
    dateValidatorDirective,
    dateEmptyValidatorDirective,
    typeEmptyValidatorDirective,
    textEmptyValidatorDirective,
    valueStructuralValidatorDirective
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
