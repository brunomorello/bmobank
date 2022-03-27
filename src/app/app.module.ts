import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewWireComponent } from './new-wire/new-wire.component';
import { AccountActivityComponent } from './account-activity/account-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    NewWireComponent,
    AccountActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'EUR',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
