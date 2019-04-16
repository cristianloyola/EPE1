import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNota96Page } from './home-nota96.page';

describe('HomeNota96Page', () => {
  let component: HomeNota96Page;
  let fixture: ComponentFixture<HomeNota96Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNota96Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNota96Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
