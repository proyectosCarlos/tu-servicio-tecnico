import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientespendientesComponent } from './clientespendientes.component';

describe('ClientespendientesComponent', () => {
  let component: ClientespendientesComponent;
  let fixture: ComponentFixture<ClientespendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientespendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientespendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
