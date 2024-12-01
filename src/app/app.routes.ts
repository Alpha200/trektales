import { Routes } from '@angular/router';
import {DestinationsComponent} from '@app/destination-list/destinations/destinations.component';

export const routes: Routes = [
    {path: '', redirectTo: '/destinations', pathMatch: 'full'},
    {
        path: 'destinations',
        component: DestinationsComponent,
    }
];
