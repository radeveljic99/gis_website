import { Location, LocationAdapter } from './location.model'
import { Image, ImageAdapter } from './image.model';
import { Adapter } from '../core/adapter.interface'
import { Injectable } from '@angular/core';

export class Place {
  id?: number;
  name?: string;
  description?: string;
  location?: Location;
  images?: Image [];

  constructor(data?: any) {
    Object.assign(this, data);
  }

}

@Injectable({
  providedIn: 'root'
})
export class PlaceAdapter implements Adapter<Place> {

  constructor(
    private locationAdapter: LocationAdapter,
    private imageAdapter: ImageAdapter
  ) {
  }

  adapt(data?: any): Place {

    if (data.location) {
      data.location = this.locationAdapter.adapt(data.location[0]);
    }

    if (data.images) {
      data.images = this.imageAdapter.adaptArray(data.images);
    }

    return new Place(data);
  }

  adaptArray(data: any): Place [] {
    const items = data.data;
    const res = [];
    for (let item of items) {
      res.push(this.adapt(item));
    }

    return res;
  }

}

