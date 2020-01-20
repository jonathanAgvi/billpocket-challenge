import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDescriptionRoutingModule } from './product-description-routing.module';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [ProductDescriptionComponent],
  imports: [
    CommonModule,
    ProductDescriptionRoutingModule,
		MatButtonModule,
		MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class ProductDescriptionModule { }
