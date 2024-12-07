import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from '@app/app.config';
import {AppComponent} from '@app/app.component';
import {Settings} from 'luxon';

Settings.defaultLocale = 'en';

bootstrapApplication(AppComponent, appConfig)
	.catch((err) => console.error(err));
