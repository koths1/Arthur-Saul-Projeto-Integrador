import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarFuncionariosComponent } from './gerenciar-funcionarios.component';

describe('GerenciarFuncionariosComponent', () => {
  let component: GerenciarFuncionariosComponent;
  let fixture: ComponentFixture<GerenciarFuncionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarFuncionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
