import {Component, Input} from '@angular/core';
import {PlaceMapComponent} from '@app/destination-details/place-map/place-map.component';
import {Place} from '@app/model/place';
import {environment} from '@env/environment';
import {RatingComponent} from '@app/destination-details/rating/rating.component';
import {FormatMonthYearPipe} from '@app/shared/format-month-year.pipe';

@Component({
  selector: 'app-place-details',
	imports: [
		PlaceMapComponent,
		RatingComponent,
		FormatMonthYearPipe,
	],
  templateUrl: './place-details.component.html',
  styleUrl: './place-details.component.scss'
})
export class PlaceDetailsComponent {
	public apiBaseUrl = environment.apiBaseUrl;

	@Input()
	public place!: Place;
}
