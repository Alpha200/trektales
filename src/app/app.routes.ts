import {Routes} from '@angular/router';
import {DestinationsComponent} from '@app/destination-list/destinations/destinations.component';
import {DestinationDetailsComponent} from '@app/destination-details/destination-details/destination-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/destinations',
    pathMatch: 'full'
  },
  {
    path: 'destinations',
    component: DestinationsComponent,
  },
  {
    path: 'destinations/:destinationId',
    component: DestinationDetailsComponent,
  },
];
