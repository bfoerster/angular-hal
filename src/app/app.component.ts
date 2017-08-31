import {Component, OnInit} from '@angular/core';
import {Pet} from './pet';
import {PetService} from './pet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Pets';
  selectedPet: Pet;
  pets: Pet[];

  constructor(private petService: PetService) {
  }

  onSelect(pet: Pet): void {
    this.selectedPet = pet;
  }

  ngOnInit(): void {
    this.getPets();
  }

  async getPets(): Promise<void> {
    this.pets = await this.petService.getPets();
    // this.pets = await this.petService.getPetsSlowly();
  }
}
