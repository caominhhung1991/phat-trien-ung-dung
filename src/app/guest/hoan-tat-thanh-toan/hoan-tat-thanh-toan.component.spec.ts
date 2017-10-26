import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoanTatThanhToanComponent } from './hoan-tat-thanh-toan.component';

describe('HoanTatThanhToanComponent', () => {
  let component: HoanTatThanhToanComponent;
  let fixture: ComponentFixture<HoanTatThanhToanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoanTatThanhToanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoanTatThanhToanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
