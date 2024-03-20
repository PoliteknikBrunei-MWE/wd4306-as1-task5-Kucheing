import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BelaitPage } from './belait.page';

describe('BelaitPage', () => {
  let component: BelaitPage;
  let fixture: ComponentFixture<BelaitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BelaitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
