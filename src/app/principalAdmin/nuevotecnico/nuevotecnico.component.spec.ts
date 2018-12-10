import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevotecnicoComponent } from './nuevotecnico.component';

describe('NuevotecnicoComponent', () => {
  let component: NuevotecnicoComponent;
  let fixture: ComponentFixture<NuevotecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevotecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevotecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
