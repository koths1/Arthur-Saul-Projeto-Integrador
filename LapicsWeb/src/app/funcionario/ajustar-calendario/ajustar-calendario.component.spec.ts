import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustarCalendarioComponent } from './ajustar-calendario.component';

describe('AjustarCalendarioComponent', () => {
  let component: AjustarCalendarioComponent;
  let fixture: ComponentFixture<AjustarCalendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjustarCalendarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustarCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
