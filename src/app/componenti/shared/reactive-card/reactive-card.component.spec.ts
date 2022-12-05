import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCardComponent } from './reactive-card.component';

describe('ReactiveCardComponent', () => {
  let component: ReactiveCardComponent;
  let fixture: ComponentFixture<ReactiveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
