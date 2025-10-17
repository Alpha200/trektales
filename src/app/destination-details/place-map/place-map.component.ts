import {Component, Input} from '@angular/core';
import {NgxMapLibreGLModule} from '@maplibre/ngx-maplibre-gl';

@Component({
  selector: 'app-place-map',
  imports: [
	  NgxMapLibreGLModule,
  ],
  templateUrl: './place-map.component.html',
  styleUrl: './place-map.component.scss'
})
export class PlaceMapComponent {
	@Input() latitude!: number;
	@Input() longitude!: number;

}
