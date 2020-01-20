import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';


const routes: Routes = [
	{
		path: '',
		component: ContainerComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule)
			},
			{
				path: 'shopping-cart',
				loadChildren: () => import('../../modules/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
			},
			{
				path: 'product',
				loadChildren: () => import('../../modules/product-description/product-description.module').then(m => m.ProductDescriptionModule)
			},
			{ path: '**', redirectTo: '/app', pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ContainerRoutingModule { }
