import { Component } from '@angular/core';
import { DataServeService } from './data-serve.service';

@Component({
  selector: 'app-lev1',
  templateUrl: 'checkout.html'
})
export class CheckoutComponent{
	constructor(private data: DataServeService) { }
}