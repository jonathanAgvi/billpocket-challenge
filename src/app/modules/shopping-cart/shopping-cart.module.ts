import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {NgxMaskModule, IConfig} from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {}
import { NgxBarcodeModule } from 'ngx-barcode';
import { ThankYouPageComponent } from './components/thank-you-page/thank-you-page.component';



@NgModule({
	declarations: [CheckOutComponent, ThankYouPageComponent],
	imports: [
		CommonModule,
		ShoppingCartRoutingModule,
		MatStepperModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		FormsModule,
		MatSelectModule,
		MatRadioModule,
		NgxMaskModule.forRoot(options),
		NgxBarcodeModule
	]
})
export class ShoppingCartModule { }
