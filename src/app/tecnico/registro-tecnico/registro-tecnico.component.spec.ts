import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTecnicoComponent } from './registro-tecnico.component';

describe('RegistroTecnicoComponent', () => {
  let component: RegistroTecnicoComponent;
  let fixture: ComponentFixture<RegistroTecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroTecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
