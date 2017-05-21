import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CheckoutComponent } from './checkout.component';
import { UserComponent } from './user.component';

const APPP_ROUTES = [
	{ path: '', component: HomeComponent },
	{ path: 'purchase', component: UserComponent },
	{ path: 'checkout', component: CheckoutComponent }
];

export const routing = RouterModule.forRoot(APPP_ROUTES);