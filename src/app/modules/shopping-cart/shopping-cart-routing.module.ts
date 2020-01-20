import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ThankYouPageComponent } from './components/thank-you-page/thank-you-page.component';


const routes: Routes = [
	{
		path: 'check-out',
		component: CheckOutComponent
	},
	{
		path: 'thank-you',
		component: ThankYouPageComponent
	},
	{ path: '**', redirectTo: '/app', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
