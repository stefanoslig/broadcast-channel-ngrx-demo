import {
  Component,
  OnInit,
  NgModule,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectLearnings } from '../data-access/learnings.selectors';
import { learningsActions } from '../data-access/learnings.actions';
import { DropdownTriggerDirectiveModule } from 'src/app/ui/dropdown/dropdown-trigger.directive';
import { DropdownComponentModule } from 'src/app/ui/dropdown/dropdown.component';
import { selectUsers } from 'src/app/users/data-access/users.selectors';
import { usersActions } from 'src/app/users/data-access/users.actions';

@Component({
  selector: 'abc-learnings-list',
  templateUrl: './learnings-list.component.html',
  styleUrls: ['./learnings-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningsListComponent implements OnInit {
  learnings$ = this.store.select(selectLearnings);
  users$ = this.store.select(selectUsers);

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(learningsActions.fetchLearnings());
    this.store.dispatch(usersActions.fetchUsers());
  }

  deleteLearning(id: number) {
    this.store.dispatch(learningsActions.deleteLearning({ id }));
  }

  assignLearning(learningId: number, userId: number) {
    this.store.dispatch(
      learningsActions.assignLearning({ learningId, userId })
    );
  }
}

@NgModule({
  imports: [
    CommonModule,
    DropdownTriggerDirectiveModule,
    DropdownComponentModule,
  ],
  declarations: [LearningsListComponent],
  exports: [LearningsListComponent],
})
export class LearningsListComponentModule {}
