import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServeService } from './data-serve.service';

@Component({
  selector: 'app-user',
  templateUrl: 'user.html'
})
export class UserComponent{

  constructor(private data : DataServeService, private router: Router) {}
  setItem(val){
  	console.log(val);
  	for(let i=0; i<this.data.inventory.length; i++){
  		if(this.data.inventory[i].color == val){
  			this.data.currentItem = i;
  		}
  	}
  	this.checkAmount(this.data.inventory[this.data.currentItem].playerName, this.data.inventory[this.data.currentItem].playerNum);
  }
  setSize(val){
  	this.data.inventory[this.data.currentItem].size = val;
  }
  checkAmount(name, num){
  	this.data.inventory[this.data.currentItem].amount = this.data.inventory[this.data.currentItem].price * this.data.inventory[this.data.currentItem].quantity;
  	this.data.inventory[this.data.currentItem].playerName = name;
  	this.data.inventory[this.data.currentItem].playerNum = num;
  	if(this.data.inventory[this.data.currentItem].playerName && this.data.inventory[this.data.currentItem].playerNum){
  		this.data.inventory[this.data.currentItem].amount += 10;
  	}else if(this.data.inventory[this.data.currentItem].playerName || this.data.inventory[this.data.currentItem].playerNum){
  		this.data.inventory[this.data.currentItem].amount += 5;
  	}
  	this.data.inventory[this.data.currentItem].amount = parseFloat(this.data.inventory[this.data.currentItem].amount.toFixed(2));
  }
  setQuantity(val){
  	val = parseInt(val);
  	this.data.inventory[this.data.currentItem].quantity = val;
  	this.checkAmount(this.data.inventory[this.data.currentItem].playerName, this.data.inventory[this.data.currentItem].playerNum);
  }
  getActive(i){
  	return (i == this.data.currentItem);
  }
  addtocart(){
    this.data.cart.push(this.data.inventory[this.data.currentItem]);
    this.data.totalAmount += parseFloat(this.data.inventory[this.data.currentItem].amount.toFixed(2));
    console.log(this.data.cart.length);
  }
}