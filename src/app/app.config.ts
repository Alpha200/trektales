import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {NgxMapLibreGLModule} from '@maplibre/ngx-maplibre-gl';
import {provideAngularSvgIcon} from 'angular-svg-icon';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({eventCoalescing: true}),
		provideRouter(routes),
		provideHttpClient(),
		provideAngularSvgIcon(),
		importProvidersFrom(NgxMapLibreGLModule)
	],
};
