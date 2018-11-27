import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpartsComponent } from './carparts.component';

describe('CarpartsComponent', () => {
  let component: CarpartsComponent;
  let fixture: ComponentFixture<CarpartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
