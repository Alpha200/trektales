import {Picture} from '@app/model/picture';
import {Place} from '@app/model/place';

export interface Destination {
	id: string;
	title: string;
	titlePicture?: Picture;
	urlSlug: string;
	places?: Place[];
}
