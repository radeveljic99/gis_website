import { Injectable } from '@angular/core';

export class Location {
  longitude?: number;
  latitude?: number;

  constructor(data?: any) {
    Object.assign(this, data);
  }

}

@Injectable({
  providedIn: 'root'
})
export class LocationAdapter {

  adapt(data?: any): Location {

    if (data.longitude) {
      data.longitude = Number(data.longitude);
    }

    if (data.latitude) {
      data.latitude = Number(data.latitude);
    }

    return new Location(data)
  }


}
