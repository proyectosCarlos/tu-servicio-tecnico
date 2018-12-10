import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoPrincipalComponent } from './tecnico-principal.component';

describe('TecnicoPrincipalComponent', () => {
  let component: TecnicoPrincipalComponent;
  let fixture: ComponentFixture<TecnicoPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
