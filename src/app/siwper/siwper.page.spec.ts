import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiwperPage } from './siwper.page';

describe('SiwperPage', () => {
  let component: SiwperPage;
  let fixture: ComponentFixture<SiwperPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SiwperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
