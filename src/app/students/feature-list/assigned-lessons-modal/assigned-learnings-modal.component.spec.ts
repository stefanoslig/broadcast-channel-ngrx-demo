import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedLessonsModalComponent } from './assigned-lessons-modal.component';

describe('AssignedLessonsModalComponent', () => {
  let component: AssignedLessonsModalComponent;
  let fixture: ComponentFixture<AssignedLessonsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignedLessonsModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedLessonsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
