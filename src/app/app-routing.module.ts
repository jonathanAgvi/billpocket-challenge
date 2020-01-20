import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'app', loadChildren: () => import('./modules/container/container.module').then(m => m.ContainerModule) },
	{ path: '**', redirectTo: 'app', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
