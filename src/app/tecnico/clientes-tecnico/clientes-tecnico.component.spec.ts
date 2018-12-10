import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesTecnicoComponent } from './clientes-tecnico.component';

describe('ClientesTecnicoComponent', () => {
  let component: ClientesTecnicoComponent;
  let fixture: ComponentFixture<ClientesTecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesTecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
