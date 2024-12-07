import {Component, Input} from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';

@Component({
  selector: 'app-rating',
	imports: [
		SvgIconComponent,
	],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
	@Input()
	public rating!: number;

}
