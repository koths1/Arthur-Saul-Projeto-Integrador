import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendarTerapiaComponent } from './recomendar-terapia.component';

describe('RecomendarTerapiaComponent', () => {
  let component: RecomendarTerapiaComponent;
  let fixture: ComponentFixture<RecomendarTerapiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendarTerapiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendarTerapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
