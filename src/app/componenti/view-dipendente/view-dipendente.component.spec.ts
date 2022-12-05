import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDipendenteComponent } from './view-dipendente.component';

describe('ViewDipendenteComponent', () => {
  let component: ViewDipendenteComponent;
  let fixture: ComponentFixture<ViewDipendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDipendenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
