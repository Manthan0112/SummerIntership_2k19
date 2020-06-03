import { Component, OnInit, Input } from '@angular/core';
import { Services } from '../services.model';
import { ServiceListService } from '../service-list.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  @Input() ser: Services;
  servName: string;
  @Input() hair: Services[] ;

  constructor(private styles: ServiceListService) { }

  ngOnInit() {
    // this.hair = this.styles.getHairServices();
  }

}
