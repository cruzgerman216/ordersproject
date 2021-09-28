import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-dashboard',
  templateUrl: './orders-dashboard.component.html',
  styleUrls: ['./orders-dashboard.component.css']
})
export class OrdersDashboardComponent implements OnInit {
  orders: string[] = [
    "order 1",
    "order 2",
    "order 3",
    "order 4",
    "order 5",
    "order 6",
    "order 7",
    "order 8",
    "order 9",
    "order 10"
  ]
  timeout: any;
  constructor() { }

  ngOnInit(): void {

  }

  onStartWorkDay() {
    this.timeout = setInterval(() => {

      this.orders.push("order " + (this.orders.length + 1))
      let lotternumber = Math.floor(Math.random() * (20 - 1 + 1) + 1);
      if (lotternumber == 1) {
        alert(`You won the lottery! Your order is ${this.orders[this.orders.length - 1]}`)
        clearInterval(this.timeout)
      }
    }, 2000)
  }

  onEndWorkDay() {
    clearInterval(this.timeout)
  }
}
// https://www.w3schools.com/jsref/met_win_clearinterval.asp
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript