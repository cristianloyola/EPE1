import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nota32ResultadoPage } from './nota32-resultado.page';

describe('Nota32ResultadoPage', () => {
  let component: Nota32ResultadoPage;
  let fixture: ComponentFixture<Nota32ResultadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nota32ResultadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nota32ResultadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
