import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({eventCoalescing: true}),
		provideRouter(routes),
		provideHttpClient(),
		importProvidersFrom(
			NgxMapboxGLModule.withConfig({
				accessToken: 'pk.eyJ1IjoiZHNhbHBoYTIwMCIsImEiOiJjbTQ3YmdmdmswNGNsMmpzb3EwNTU0dW5wIn0.JH1BOfGg8Vri5LfkEiU4XA',
			})
		)
	],
};
