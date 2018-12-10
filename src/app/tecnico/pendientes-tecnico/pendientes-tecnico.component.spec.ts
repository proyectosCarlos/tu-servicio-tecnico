import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendientesTecnicoComponent } from './pendientes-tecnico.component';

describe('PendientesTecnicoComponent', () => {
  let component: PendientesTecnicoComponent;
  let fixture: ComponentFixture<PendientesTecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendientesTecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendientesTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
