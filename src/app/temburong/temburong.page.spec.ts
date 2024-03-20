import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemburongPage } from './temburong.page';

describe('TemburongPage', () => {
  let component: TemburongPage;
  let fixture: ComponentFixture<TemburongPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TemburongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
