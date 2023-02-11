import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { SubmissionsMapComponent } from './components/submissions-map/submissions-map.component';
import { SubmissionsListsComponent } from './components/submissions-lists/submissions-lists.component';
import { FormsComponent } from './components/forms/forms.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HistoryComponent } from './components/history/history.component';
import { ReportsComponent } from './components/reports/reports.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { SubmissionsComponent } from './components/submissions/submissions.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    SubmissionsMapComponent,
    SubmissionsListsComponent,
    FormsComponent,
    CustomersComponent,
    HistoryComponent,
    ReportsComponent,
    WorkflowComponent,
    SubmissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
