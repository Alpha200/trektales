import {Component, Input} from '@angular/core';
import {Destination} from '@app/model/destination';
import {environment} from '@env/environment';

@Component({
  selector: 'app-destination-card',
  imports: [],
  templateUrl: './destination-card.component.html',
  styleUrl: './destination-card.component.scss'
})
export class DestinationCardComponent {
  public apiBaseUrl = environment.apiBaseUrl;

  @Input() destination!: Destination;

}
