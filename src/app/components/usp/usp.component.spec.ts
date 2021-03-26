/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UspComponent } from './usp.component';

describe('UspComponent', () => {
  let component: UspComponent;
  let fixture: ComponentFixture<UspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
