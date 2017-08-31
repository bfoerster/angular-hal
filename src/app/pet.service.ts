import {Injectable} from '@angular/core';
// import {Document, Navigator} from 'ng-hal';

import {Pet} from './pet';
import {PETS} from './mock-pets';

@Injectable()
export class PetService {

  // constructor(private navigator: Navigator) {
  // }

  getPets(): Promise<Pet[]> {
    // this.navigator
    //     .get('http://localhost:8000/pets')
    //     .subscribe(console.log);

    return Promise.resolve(PETS);
  }

  async getPetsSlowly(): Promise<Pet[]> {
    await timeout(2000);
    return this.getPets();
  }
}

function timeout(ms: Number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
