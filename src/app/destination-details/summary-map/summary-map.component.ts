import {Component, Input} from '@angular/core';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';

@Component({
  selector: 'app-summary-map',
  imports: [
	  NgxMapboxGLModule,
  ],
  templateUrl: './summary-map.component.html',
  styleUrl: './summary-map.component.scss'
})
export class SummaryMapComponent {
	@Input() locations!: {latitude: number, longitude: number}[];
}
