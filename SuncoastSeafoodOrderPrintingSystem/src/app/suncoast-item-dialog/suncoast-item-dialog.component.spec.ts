import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuncoastItemDialogComponent } from './suncoast-item-dialog.component';

describe('SuncoastItemDialogComponent', () => {
  let component: SuncoastItemDialogComponent;
  let fixture: ComponentFixture<SuncoastItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuncoastItemDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuncoastItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
