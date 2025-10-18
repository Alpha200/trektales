import {Routes} from '@angular/router';
import {DestinationsComponent} from '@app/destination-list/destinations/destinations.component';
import {DestinationDetailsComponent} from '@app/destination-details/destination-details/destination-details.component';
import {AllPlacesMapComponent} from '@app/all-places-map/all-places-map.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/destinations',
		pathMatch: 'full',
	},
	{
		path: 'destinations',
		component: DestinationsComponent,
	},
	{
		path: 'destinations/:destinationId',
		component: DestinationDetailsComponent,
	},
	{
		path: 'map',
		component: AllPlacesMapComponent,
	},
];
