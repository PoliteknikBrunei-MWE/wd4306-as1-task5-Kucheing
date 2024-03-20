import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutongPage } from './tutong.page';

describe('TutongPage', () => {
  let component: TutongPage;
  let fixture: ComponentFixture<TutongPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TutongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
