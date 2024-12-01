import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "@env/environment";
import {Destination} from '@app/model/destination';
import {StrapiResponse} from '@app/model/response';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
  constructor(
    private http: HttpClient,
  ) { }

  public getDestinations(): Observable<StrapiResponse<Destination>> {
    const params = new HttpParams({
      fromObject: {
        sort: "rank:asc",
        populate: "titlePicture",
      }
    });
    return this.http.get<StrapiResponse<Destination>>(
      `${environment.apiBaseUrl}/api/destinations`, {
        params
      }
    );
  }
}
