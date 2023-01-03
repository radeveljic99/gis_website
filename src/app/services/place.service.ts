import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Place, PlaceAdapter } from '../models/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(
    private http: HttpClient,
    private placeAdapter: PlaceAdapter) {
  }

  private url: string = environment.apiURL + 'places'

  all(): Observable<Place []> {
    return this.http.get<Place []>('http://127.0.0.1:8000/places/').pipe(
      map(
        res => {
          return this.placeAdapter.adaptArray(res);
        }
      )
    );
  }

  nearest(longitude: number, latitude: number): Observable<Place []> {
    return this.http.get<Place []>(`http://127.0.0.1:8000/places/${latitude}/${longitude}`).pipe(
      map(
        res => {
          return this.placeAdapter.adaptArray(res);
        }
      )
    );
  }

}
