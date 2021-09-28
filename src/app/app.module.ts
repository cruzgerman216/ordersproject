import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrdersDashboardComponent } from './orders-dashboard/orders-dashboard.component';
import { FirstFiveOrdersComponent } from './first-five-orders/first-five-orders.component';
import { AllOtherOrdersComponent } from './all-other-orders/all-other-orders.component';
import { LotteryWinningOrderComponent } from './lottery-winning-order/lottery-winning-order.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersDashboardComponent,
    FirstFiveOrdersComponent,
    AllOtherOrdersComponent,
    LotteryWinningOrderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
