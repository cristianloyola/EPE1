import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNota128Page } from './home-nota128.page';

describe('HomeNota128Page', () => {
  let component: HomeNota128Page;
  let fixture: ComponentFixture<HomeNota128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNota128Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNota128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
