import {
  Component,
  OnInit,
  NgModule,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectLessons } from '../data-access/lessons.selectors';
import { lessonsActions } from '../data-access/lessons.actions';
import { DropdownTriggerDirectiveModule } from 'src/app/ui/dropdown/dropdown-trigger.directive';
import { DropdownComponentModule } from 'src/app/ui/dropdown/dropdown.component';
import { selectStudents } from 'src/app/students/data-access/students.selectors';
import { studentsActions } from 'src/app/students/data-access/students.actions';

@Component({
  selector: 'abc-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonsListComponent implements OnInit {
  lessons$ = this.store.select(selectLessons);
  students$ = this.store.select(selectStudents);

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(lessonsActions.fetchLessons());
    this.store.dispatch(studentsActions.fetchStudents());
  }

  deleteLesson(id: number) {
    this.store.dispatch(lessonsActions.deleteLesson({ id }));
  }

  assignLesson(llessonId: number, userId: number) {
    this.store.dispatch(
      lessonsActions.assignLesson({ llessonId, userId })
    );
  }
}

@NgModule({
  imports: [
    CommonModule,
    DropdownTriggerDirectiveModule,
    DropdownComponentModule,
  ],
  declarations: [LessonsListComponent],
  exports: [LessonsListComponent],
})
export class LessonsListComponentModule {}
