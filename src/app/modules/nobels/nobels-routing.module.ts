import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { NobelsPageComponent } from '@app/modules/nobels/components/nobels-page/nobels-page.component';

const routes: Route[] = [
	{ path: '', component: NobelsPageComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class NobelsRoutingModule {}
