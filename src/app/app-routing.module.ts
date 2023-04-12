import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/nobels', pathMatch: 'full' },
	{ path: 'nobels',    loadChildren: () => import('./modules/nobels/nobels.module').then(m => m.NobelsModule) }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		anchorScrolling: 'enabled',
		scrollPositionRestoration: 'enabled'
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
