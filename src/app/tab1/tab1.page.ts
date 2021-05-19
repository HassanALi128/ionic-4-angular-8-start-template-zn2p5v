import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  size = [];
  constructor() {}

  add() {
    this.size.push({
      weight: 0,
      price: 0,
      quantity: 0
    });
  }

  remove(index) {
    this.size.splice(index, 1);
  }
  minusQuantity(num) {
    if (num.quantity > 1) {
      num.quantity -= 1;
    }
    console.log(num);
  }
  addQuantity(num) {
    num.quantity += 1;
  }
  addMenu() {
    console.log(this.size);
  }
}
