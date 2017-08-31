import {Component, Input} from '@angular/core';
import {Pet} from './pet';

@Component({
  selector: 'pet-detail',
  templateUrl: './pet-detail.component.html',
})
export class PetDetailComponent {
  @Input() pet: Pet;
}
