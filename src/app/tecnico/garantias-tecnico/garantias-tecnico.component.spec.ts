import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiasTecnicoComponent } from './garantias-tecnico.component';

describe('GarantiasTecnicoComponent', () => {
  let component: GarantiasTecnicoComponent;
  let fixture: ComponentFixture<GarantiasTecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarantiasTecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarantiasTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
