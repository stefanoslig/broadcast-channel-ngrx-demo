import {
  Component,
  OnInit,
  NgModule,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignedLearningsModalComponent } from './assigned-learnings-modal/assigned-learnings-modal.component';
import { Learning } from 'src/app/shared/api-types/learning';
import { AvatarComponentModule } from 'src/app/ui/avatar/avatar.component';
import { Store } from '@ngrx/store';
import { ModalService } from 'src/app/ui/modal';
import { selectUsers } from '../data-access/users.selectors';
import { usersActions } from '../data-access/users.actions';

@Component({
  selector: 'abc-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  users$ = this.store.select(selectUsers);

  constructor(
    private readonly store: Store,
    private readonly modalService: ModalService
  ) {}

  ngOnInit() {
    this.store.dispatch(usersActions.fetchUsers());
  }

  openAssignedLearnings(learnings: Array<Learning>) {
    this.modalService.open(AssignedLearningsModalComponent, learnings);
  }

  deleteUser(id: number) {
    this.store.dispatch(usersActions.deleteUser({ id }));
  }
}

@NgModule({
  imports: [CommonModule, AvatarComponentModule],
  declarations: [UsersListComponent],
  exports: [UsersListComponent],
})
export class UsersListComponentModule {}
