import {Component, Input} from '@angular/core';
import {Place} from '@app/model/place';
import {FormatMonthYearPipe} from '@app/shared/format-month-year.pipe';
import {RatingComponent} from '@app/destination-details/rating/rating.component';

@Component({
	selector: 'app-place-info',
	imports: [
		FormatMonthYearPipe,
		RatingComponent,
	],
	templateUrl: './place-info.component.html',
	styleUrl: './place-info.component.scss',
})
export class PlaceInfoComponent {

	@Input()
	public place!: Place;
}
