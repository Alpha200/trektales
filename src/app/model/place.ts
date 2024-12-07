import {Picture} from '@app/model/picture';

export interface Place {
	details?: StrapiComponent[];
	pictures?: StrapiComponent[];
	id: string;
	title: string;
}

export interface StrapiComponent {
	"__component": string;
	id: number
}

export interface TextComponent extends StrapiComponent {
	text: string;
}

export interface LocationComponent extends StrapiComponent {
	latitude: number;
	longitude: number;
}

export interface PictureComponent extends StrapiComponent {
	image: Picture;
}
