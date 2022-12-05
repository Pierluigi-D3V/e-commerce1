import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOspiteComponent } from './view-ospite.component';

describe('ViewOspiteComponent', () => {
  let component: ViewOspiteComponent;
  let fixture: ComponentFixture<ViewOspiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOspiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOspiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
