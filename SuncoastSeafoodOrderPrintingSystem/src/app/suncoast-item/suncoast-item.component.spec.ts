import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuncoastItemComponent } from './suncoast-item.component';

describe('SuncoastItemComponent', () => {
  let component: SuncoastItemComponent;
  let fixture: ComponentFixture<SuncoastItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuncoastItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuncoastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
