import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';


const routes: Routes = [
	{
		path: 'description/:id',
		component: ProductDescriptionComponent
	},
	{ path: '**', redirectTo: '/app', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDescriptionRoutingModule { }
