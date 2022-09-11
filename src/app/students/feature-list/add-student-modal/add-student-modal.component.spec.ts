import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentModalComponent } from './add-student-modal.component';

describe('AddStudentModalComponent', () => {
  let component: AddStudentModalComponent;
  let fixture: ComponentFixture<AddStudentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddStudentModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
