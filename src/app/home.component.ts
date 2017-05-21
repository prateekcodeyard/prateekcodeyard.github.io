import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServeService } from './data-serve.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html'
})
export class HomeComponent{

  constructor(private data : DataServeService, private router: Router) {}
  setItem(i){
  	this.data.currentItem = i;
  	this.router.navigate(['/purchase']);
  }
}
