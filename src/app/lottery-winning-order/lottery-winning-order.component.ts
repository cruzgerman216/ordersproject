import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottery-winning-order',
  templateUrl: './lottery-winning-order.component.html',
  styleUrls: ['./lottery-winning-order.component.css']
})
export class LotteryWinningOrderComponent implements OnInit {
  @Input('getOrders') orders:string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
