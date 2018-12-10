import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltecnicoComponent } from './modaltecnico.component';

describe('ModaltecnicoComponent', () => {
  let component: ModaltecnicoComponent;
  let fixture: ComponentFixture<ModaltecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaltecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaltecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
