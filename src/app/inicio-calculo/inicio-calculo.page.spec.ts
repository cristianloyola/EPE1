import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCalculoPage } from './inicio-calculo.page';

describe('InicioCalculoPage', () => {
  let component: InicioCalculoPage;
  let fixture: ComponentFixture<InicioCalculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioCalculoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioCalculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
