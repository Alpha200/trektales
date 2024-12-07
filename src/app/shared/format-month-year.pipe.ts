import {Pipe, PipeTransform} from '@angular/core';
import {DateTime} from 'luxon';

@Pipe({
	name: 'formatMonthYear'
})
export class FormatMonthYearPipe implements PipeTransform {
	transform(value: string): string {
		if (value == null) {
			return '';
		}

		const date = DateTime.fromISO(value);
		return date.toLocaleString({month: 'long', year: 'numeric'});
	}
}
