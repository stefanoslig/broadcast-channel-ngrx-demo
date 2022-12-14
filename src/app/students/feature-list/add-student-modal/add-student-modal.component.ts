import {
  Component,
  NgModule,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ModalRef } from 'src/app/ui/modal';

export interface ModalData {
  action: 'addStudent' | 'closeModal';
  value?: unknown;
}

@Component({
  selector: 'abc-add-student',
  templateUrl: './add-student-modal.component.html',
  styleUrls: ['./add-student-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddStudentModalComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private readonly modalRef: ModalRef,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  closeModal() {
    const data: ModalData = { action: 'closeModal' };
    this.modalRef.close(data);
  }

  onSubmit() {
    const data: ModalData = { action: 'addStudent', value: this.userForm.value };
    this.modalRef.close(data);
  }

  get name(): FormControl {
    return this.userForm.controls['name'] as FormControl;
  }

  get email(): FormControl {
    return this.userForm.controls['email'] as FormControl;
  }
}

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AddStudentModalComponent],
  exports: [AddStudentModalComponent],
})
export class AddStudentModalComponentModule {}
