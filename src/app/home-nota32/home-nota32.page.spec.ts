import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNota32Page } from './home-nota32.page';

describe('HomeNota32Page', () => {
  let component: HomeNota32Page;
  let fixture: ComponentFixture<HomeNota32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNota32Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNota32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
