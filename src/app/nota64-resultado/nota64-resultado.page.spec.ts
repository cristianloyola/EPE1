import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nota64ResultadoPage } from './nota64-resultado.page';

describe('Nota64ResultadoPage', () => {
  let component: Nota64ResultadoPage;
  let fixture: ComponentFixture<Nota64ResultadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nota64ResultadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nota64ResultadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
