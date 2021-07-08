/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestModComponent } from './testMod.component';

describe('TestModComponent', () => {
  let component: TestModComponent;
  let fixture: ComponentFixture<TestModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
