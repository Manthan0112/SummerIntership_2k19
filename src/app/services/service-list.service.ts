import { Injectable } from '@angular/core';
import { Services } from './services.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {

  constructor() { }

  hair: Services[] = [
    new Services('hairstyle','120min','1200/-'),
    new Services('Haircut','60min','200/-'),
    new Services('hairstyle','120min','1200/-'),
    new Services('Haircut','60min','200/-'),
    new Services('hairstyle','120min','1200/-'),
    new Services('Haircut','60min','200/-'),
    new Services('hairstyle','120min','1200/-'),
    new Services('Haircut','60min','200/-'),
  ];

  nail: Services[]= [
    new Services('Nailpaint','20min','100/-'),
    new Services('Nailpaint','20min','100/-'),
    new Services('Nailpaint','20min','100/-'),
    new Services('Nailpaint','20min','100/-'),
    new Services('Nailpaint','20min','100/-'),
    new Services('Nailpaint','20min','100/-'),
    new Services('Nailpaint','20min','100/-'),
  ];

  spa: Services[]=[
    new Services('spa','3Hrs','2000/-'),
    new Services('spa','3Hrs','2000/-'),
    new Services('spa','3Hrs','2000/-'),
    new Services('spa','3Hrs','2000/-'),
    new Services('spa','3Hrs','2000/-'),
    new Services('spa','3Hrs','2000/-'),
  ];

  getHairServices(){
    return this.hair.slice();
  }

  getNailServices(){
    return this.nail.slice();
  }

  getSpaServices(){
    return this.spa.slice();
  }
}
