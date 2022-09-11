import {
  Component,
  NgModule,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRef, MODAL_DATA } from 'src/app/ui/modal';
import { Lesson } from 'src/app/shared/api-types/lesson';

@Component({
  selector: 'abc-assigned-lessons-modal',
  templateUrl: './assigned-lessons-modal.component.html',
  styleUrls: ['./assigned-lessons-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignedLessonsModalComponent {
  lessons = this.modalData;

  constructor(
    @Inject(MODAL_DATA) private readonly modalData: Array<Lesson>,
    private readonly modalRef: ModalRef
  ) {}

  closeModal() {
    this.modalRef.close();
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [AssignedLessonsModalComponent],
  exports: [AssignedLessonsModalComponent],
})
export class AssignedLessonsModalComponentModule {}
