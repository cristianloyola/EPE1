import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nota128ResultadoPage } from './nota128-resultado.page';

describe('Nota128ResultadoPage', () => {
  let component: Nota128ResultadoPage;
  let fixture: ComponentFixture<Nota128ResultadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nota128ResultadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nota128ResultadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
