/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListTestingComponent } from './listTesting.component';

describe('ListTestingComponent', () => {
  let component: ListTestingComponent;
  let fixture: ComponentFixture<ListTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
