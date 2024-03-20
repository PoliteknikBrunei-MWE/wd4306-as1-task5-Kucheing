import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BruneiPage } from './brunei.page';

describe('BruneiPage', () => {
  let component: BruneiPage;
  let fixture: ComponentFixture<BruneiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BruneiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
