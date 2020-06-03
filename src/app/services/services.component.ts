import { Component, OnInit } from '@angular/core';

import { ServiceListService } from './service-list.service';
import { Services } from './services.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ServiceListService]
})
export class ServicesComponent implements OnInit {

  hair: Services[] ;
  nail: Services[];
  spa: Services[];
  constructor(private styles: ServiceListService) { }

  ngOnInit() {
    this.hair = this.styles.getHairServices();
    this.nail = this.styles.getNailServices();
    this.spa = this.styles.getSpaServices();
  }

}
