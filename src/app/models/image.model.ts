import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';

export class Image {
  id?: number;
  path?: string;
  caption?: string;

  constructor(data?: any) {
    Object.assign(this, data);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ImageAdapter {

  constructor() {
  }

  adapt(data?: any): Image {

    if (data.path) {
      data.path = environment.mediaUrl + data.path;
    }

    return new Image(data);
  }

  adaptArray(data?: any): Image [] {
    const res = [];
    for (let item of data) {
      res.push(this.adapt(item));
    }
    return res;
  }

}
