import {
  Component,
  OnInit,
  NgModule,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignedLessonsModalComponent } from './assigned-lessons-modal/assigned-lessons-modal.component';
import { Lesson } from 'src/app/shared/api-types/lesson';
import { AvatarComponentModule } from 'src/app/ui/avatar/avatar.component';
import { Store } from '@ngrx/store';
import { ModalRef, ModalService } from 'src/app/ui/modal';
import { selectStudents } from '../data-access/students.selectors';
import { studentsActions } from '../data-access/students.actions';
import {
  AddStudentModalComponent,
  ModalData,
} from './add-student-modal/add-student-modal.component';
import { filter, take } from 'rxjs';
import { Student } from 'src/app/shared/api-types/student';

@Component({
  selector: 'abc-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsListComponent implements OnInit {
  students$ = this.store.select(selectStudents);
  private _modalRef!: ModalRef;

  constructor(
    private readonly store: Store,
    private readonly modalService: ModalService
  ) {}

  ngOnInit() {
    this.store.dispatch(studentsActions.fetchStudents());
  }

  openAddStudent() {
    this._modalRef = this.modalService.open(AddStudentModalComponent);
    this.subscribeToAddStudentModal();
  }

  private subscribeToAddStudentModal() {
    this._modalRef
      .afterClosed<ModalData>()
      .pipe(
        filter((data) => data.action === 'addStudent'),
        take(1)
      )
      .subscribe((data) =>
        this.store.dispatch(
          studentsActions.addStudent({
            student: data.value as Partial<Student>,
          })
        )
      );
  }

  openAssignedLessons(lessons: Array<Lesson>) {
    this.modalService.open(AssignedLessonsModalComponent, lessons);
  }

  deleteStudent(id: number) {
    this.store.dispatch(studentsActions.deleteStudent({ id }));
  }
}

@NgModule({
  imports: [CommonModule, AvatarComponentModule],
  declarations: [StudentsListComponent],
  exports: [StudentsListComponent],
})
export class StudentsListComponentModule {}
