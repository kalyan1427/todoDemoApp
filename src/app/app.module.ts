import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchByStatusPipe } from './search-by-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchByStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
