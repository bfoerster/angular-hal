import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HalModule} from 'ng-hal';
import {HttpModule} from '@angular/http';
import {PetDetailComponent} from './pet-detail.component';
import {FormsModule} from '@angular/forms';
import {PetService} from './pet.service';

@NgModule({
  declarations: [
    AppComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HalModule.forRoot(),
    HttpModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
