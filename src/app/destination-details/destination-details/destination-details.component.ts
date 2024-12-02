import {Component} from '@angular/core';
import {DestinationsService} from '@app/services/destinations.service';
import {filter, map, Observable, switchMap, throttleTime} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {Destination} from '@app/model/destination';
import {environment} from '@env/environment';
import {PlaceDetailsComponent} from '@app/destination-details/place-details/place-details.component';

@Component({
	selector: 'app-destination-details',
	imports: [
		AsyncPipe,
		PlaceDetailsComponent,
	],
	templateUrl: './destination-details.component.html',
	styleUrl: './destination-details.component.scss',
})
export class DestinationDetailsComponent {
	public apiBaseUrl = environment.apiBaseUrl;
	public destination: Observable<Destination>;
	public backgroundImageUrl: Observable<string>;

	constructor(
		destinationService: DestinationsService,
		route: ActivatedRoute,
	) {
		this.destination = route.params.pipe(
			filter((param) => param?.["destinationId"] != null),
			throttleTime(500),
			switchMap(
				(params) => destinationService.getDestination(params["destinationId"])
			),
			map((response) => response.data)
		)

		this.backgroundImageUrl = this.destination.pipe(
			filter((destination) => destination?.titlePicture?.url != null),
			map((destination) => this.apiBaseUrl + destination?.titlePicture?.url),
		);
	}
}
