import {Component} from '@angular/core';
import {DestinationsService} from '@app/services/destinations.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {DestinationCardComponent} from '../destination-card/destination-card.component';
import {StrapiResponse} from '@app/model/response';
import {Destination} from '@app/model/destination';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-destinations',
  imports: [
    AsyncPipe,
    DestinationCardComponent,
    RouterLink,
  ],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss'
})
export class DestinationsComponent {
  public destinations: Observable<StrapiResponse<Destination>>;

  constructor(
    destinationsService: DestinationsService,
  ) {
    this.destinations = destinationsService.getDestinations();
  }
}
