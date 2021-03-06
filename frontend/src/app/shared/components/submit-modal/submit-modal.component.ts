import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {InputDataModel} from '../../models/input-data.model';
import {SuccessModalComponent} from '../success-modal/success-modal.component';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UniversityModel} from '../../models/university-data.model';
import {WorkoutService} from '../../../core/services/workout.service';

@Component({
  selector: 'app-submit-modal',
  templateUrl: './submit-modal.component.html',
  styleUrls: ['./submit-modal.component.css']
})
export class SubmitModalComponent implements OnInit {

  @Input() universities: UniversityModel[];
  @Output() passEntry: EventEmitter<InputDataModel> = new EventEmitter();

  model = new InputDataModel('', null, 0, 0, 0, 0);

  constructor(@Inject(NgbModal) private modalService: NgbModal,
              @Inject(WorkoutService) private workoutService: WorkoutService,
              public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  submit(model: InputDataModel) {
    this.workoutService.submitWorkout(model).subscribe(() => {
      console.log(model);
      this.passEntry.emit(model);
    });
    this.openConfirm(model);
  }

  openConfirm(model: InputDataModel) {
    const modalRef = this.modalService.open(SuccessModalComponent);
    modalRef.componentInstance.model = model;
  }
}
