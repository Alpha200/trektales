import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from "@env/environment";
import {Place} from '@app/model/place';
import {StrapiResponse} from '@app/model/response';

@Injectable({
	providedIn: 'root',
})
export class PlacesService {
	constructor(
		private http: HttpClient,
	) {
	}

	public getPlaces(): Observable<Place[]> {
		const params = new HttpParams({
			fromObject: {
				populate: "details",
			},
		});
		return this.http.get<StrapiResponse<Place>>(
			`${environment.apiBaseUrl}/api/places`, {
				params,
			},
		).pipe(
			map(response => response.data)
		);
	}
}

