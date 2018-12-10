import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatecnicosComponent } from './listatecnicos.component';

describe('ListatecnicosComponent', () => {
  let component: ListatecnicosComponent;
  let fixture: ComponentFixture<ListatecnicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListatecnicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
