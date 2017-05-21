import { Component } from '@angular/core';
import { DataServeService } from './data-serve.service';

@Component({
  selector: 'app-root',
  // directives: [ROUTER_CONFIGURATION],
  templateUrl: 'app.component.html'
})
export class AppComponent {
	constructor(private data:DataServeService){}
}