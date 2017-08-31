import {Injectable} from '@angular/core';
import {Document, Navigator} from 'ng-hal';

import {Pet} from './pet';
import {PETS} from './mock-pets';

@Injectable()
export class PetService {

  constructor(private navigator: Navigator) {
  }

  getPets(): Promise<Pet[]> {

    return new Promise(resolve => {
      this.navigator.get('/api/pets').subscribe((document: Document) => {
        console.log(document.resource.link('self'));
        const allPets = document.resource.embeddedArray('pets');

        resolve(allPets);
      });
    });
  }

  async getPetsSlowly(): Promise<Pet[]> {
    await timeout(2000);
    return this.getPets();
  }
}

function timeout(ms: Number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
