import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEsMxExtra from '@angular/common/locales/es-MX';
registerLocaleData(localeEsMxExtra, 'es-MX');

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule
	],
	providers: [{ provide: LOCALE_ID, useValue: "es-MX" },],
	bootstrap: [AppComponent]
})
export class AppModule { }
