import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryWinningOrderComponent } from './lottery-winning-order.component';

describe('LotteryWinningOrderComponent', () => {
  let component: LotteryWinningOrderComponent;
  let fixture: ComponentFixture<LotteryWinningOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotteryWinningOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryWinningOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
