import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaltrainingComponent } from './personaltraining.component';

describe('PersonaltrainingComponent', () => {
  let component: PersonaltrainingComponent;
  let fixture: ComponentFixture<PersonaltrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaltrainingComponent]
    });
    fixture = TestBed.createComponent(PersonaltrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
