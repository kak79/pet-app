import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZooAnimalsComponent } from './zoo-animals/zoo-animals.component';
import { NameFormatPipe } from './pipes/name-format.pipe';
import { FetchServiceService } from './services/fetch-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ZooAnimalsComponent,
    NameFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FetchServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
