import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaTecnicoComponent } from './grafica-tecnico.component';

describe('GraficaTecnicoComponent', () => {
  let component: GraficaTecnicoComponent;
  let fixture: ComponentFixture<GraficaTecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaTecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
