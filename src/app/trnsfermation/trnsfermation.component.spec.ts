import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrnsfermationComponent } from './trnsfermation.component';

describe('TrnsfermationComponent', () => {
  let component: TrnsfermationComponent;
  let fixture: ComponentFixture<TrnsfermationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrnsfermationComponent]
    });
    fixture = TestBed.createComponent(TrnsfermationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
