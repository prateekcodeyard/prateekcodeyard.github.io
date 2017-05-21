import { Injectable } from '@angular/core';

@Injectable()
export class DataServeService {

  constructor() { }
  currentItem = NaN;
  cart = [];
  totalAmount:number = 0;
  inventory: any[] = [
  	{
  		id: 0,
  		name: "Russell Atheletic Men's Core Peformance Tee",
  		subtext: "Fruit of the Loom | 629X2M1",
  		price: 19.99,
  		amount: 19.99,
  		size: 'M',
  		color: 'Yellow',
  		playerName: '',
  		playerNum: '',
  		quantity: 1,
  		imgURL: '../assets/images/t1.png'
  	},
  	{
  		id: 1,
  		name: "Men Navy PAVLIK Solid Slim Polo Collar T-shirt",
  		subtext: "Fruit of the Loom | 1873687",
  		price: 15,
  		amount: 15,
  		size: 'S',
  		color: 'Grey',
  		playerName: '',
  		playerNum: '',
  		quantity: 1,
  		imgURL: '../assets/images/t2.png'
  	},
  	{
  		id: 2,
  		name: "French Connection Men Navy Solid Round Neck T-Shirt",
  		subtext: "Fruit of the Loom | 1762638",
  		price: 12.49,
  		amount: 12.49,
  		size: 'L',
  		color: 'Black',
  		playerName: '',
  		playerNum: '',
  		quantity: 1,
  		imgURL: '../assets/images/t3.png'
  	}
  ]
}
