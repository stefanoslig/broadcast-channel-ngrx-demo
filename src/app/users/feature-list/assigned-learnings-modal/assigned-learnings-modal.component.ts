import {
  Component,
  NgModule,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRef, MODAL_DATA } from 'src/app/ui/modal';
import { Learning } from 'src/app/shared/api-types/learning';

@Component({
  selector: 'abc-assigned-learnings-modal',
  templateUrl: './assigned-learnings-modal.component.html',
  styleUrls: ['./assigned-learnings-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignedLearningsModalComponent {
  learnings = this.modalData;

  constructor(
    @Inject(MODAL_DATA) private readonly modalData: Array<Learning>,
    private readonly modalRef: ModalRef
  ) {}

  closeModal() {
    this.modalRef.close();
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [AssignedLearningsModalComponent],
  exports: [AssignedLearningsModalComponent],
})
export class AssignedLearningsModalComponentModule {}
