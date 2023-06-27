import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouptrainingComponent } from './grouptraining.component';

describe('GrouptrainingComponent', () => {
  let component: GrouptrainingComponent;
  let fixture: ComponentFixture<GrouptrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrouptrainingComponent]
    });
    fixture = TestBed.createComponent(GrouptrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
