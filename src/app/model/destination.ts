export interface Destination {
	id: string;
	title: string;
	titlePicture?: Picture;
	urlSlug: string;
}

export interface Picture {
	url: string;
}
