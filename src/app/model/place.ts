import {Picture} from '@app/model/picture';

export interface Place {
	details?: PlaceDetail[];
	pictures: Picture[];
	id: string;
	title: string;
}

export interface PlaceDetail {
	"__component": string;
	id: number
}

export interface PlaceDetailText extends PlaceDetail {
	text: string;
}

export interface PlaceDetailLocation extends PlaceDetail {
	latitude: number;
	longitude: number;
}
