import {Component, OnInit} from '@angular/core';
import {NgxMapLibreGLModule} from '@maplibre/ngx-maplibre-gl';
import {PlacesService} from '@app/services/places.service';
import {Place, LocationComponent} from '@app/model/place';
import {LngLatBoundsLike} from 'maplibre-gl';
import type {FeatureCollection, Feature, Point} from 'geojson';

@Component({
	selector: 'app-all-places-map',
	imports: [
		NgxMapLibreGLModule,
	],
	templateUrl: './all-places-map.component.html',
	styleUrl: './all-places-map.component.scss'
})
export class AllPlacesMapComponent implements OnInit {
	places: Place[] = [];
	bounds?: LngLatBoundsLike;
	geoJsonData: FeatureCollection<Point> = {
		type: 'FeatureCollection',
		features: []
	};

	constructor(private placesService: PlacesService) {}

	ngOnInit(): void {
		this.placesService.getPlaces().subscribe(places => {
			this.places = places;
			this.updateGeoJsonData();
			this.calculateBounds();
		});
	}

	private updateGeoJsonData(): void {
		const locations = this.getLocations();
		this.geoJsonData = {
			type: 'FeatureCollection',
			features: locations.map(loc => ({
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [loc.lng, loc.lat]
				},
				properties: {
					title: loc.title
				}
			}))
		};
	}

	private getLocations(): {lng: number, lat: number, title: string}[] {
		const locations: {lng: number, lat: number, title: string}[] = [];

		for (const place of this.places) {
			if (place.details) {
				for (const detail of place.details) {
					if (detail.__component === 'destination.location') {
						const locationComponent = detail as LocationComponent;
						locations.push({
							lng: locationComponent.longitude,
							lat: locationComponent.latitude,
							title: place.title
						});
					}
				}
			}
		}

		return locations;
	}

	private calculateBounds(): void {
		const locations = this.getLocations();

		if (locations.length === 0) {
			return;
		}

		let minLng = locations[0].lng;
		let maxLng = locations[0].lng;
		let minLat = locations[0].lat;
		let maxLat = locations[0].lat;

		for (const loc of locations) {
			if (loc.lng < minLng) minLng = loc.lng;
			if (loc.lng > maxLng) maxLng = loc.lng;
			if (loc.lat < minLat) minLat = loc.lat;
			if (loc.lat > maxLat) maxLat = loc.lat;
		}

		// Add some padding
		const lngPadding = (maxLng - minLng) * 0.1;
		const latPadding = (maxLat - minLat) * 0.1;

		this.bounds = [
			[minLng - lngPadding, minLat - latPadding],
			[maxLng + lngPadding, maxLat + latPadding]
		];
	}
}
