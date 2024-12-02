import {Component, Input} from '@angular/core';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';

@Component({
  selector: 'app-place-map',
  imports: [
	  NgxMapboxGLModule,
  ],
  templateUrl: './place-map.component.html',
  styleUrl: './place-map.component.scss'
})
export class PlaceMapComponent {
	@Input() latitude!: number;
	@Input() longitude!: number;

}
