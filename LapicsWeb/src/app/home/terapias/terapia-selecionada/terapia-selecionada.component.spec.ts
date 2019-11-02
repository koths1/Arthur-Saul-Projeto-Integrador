import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiaSelecionadaComponent } from './terapia-selecionada.component';

describe('TerapiaSelecionadaComponent', () => {
  let component: TerapiaSelecionadaComponent;
  let fixture: ComponentFixture<TerapiaSelecionadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerapiaSelecionadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerapiaSelecionadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
