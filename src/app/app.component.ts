import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { PlaceService } from './services/place.service';
import { Place } from './models/place.model';
import { Image } from './models/image.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  longitude: number = 42.7087;
  latitude: number = 19.3744;
  map: any;
  places: Place [] = [];
  semaphores: any = {
    galleryOpened: false
  };
  imagesForGallery: Image [] = null;

  constructor(private placeService: PlaceService) {
  }

  ngOnInit(): void {
    this.getUserLocation();
  }

  ngAfterViewInit(): void {


    this.map = L.map('map').setView([this.longitude, this.latitude], 8.5);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

  }

  getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.placeService.nearest(longitude, latitude).subscribe(res => {
          this.places = res;
          this.attachPins();
        })
      });
    } else {
      this.placeService.all().subscribe(res => {
        this.places = res;
        this.attachPins();
      })
    }
  }

  openGallery(images: Image []): void {
    this.semaphores.galleryOpened = true;
    this.imagesForGallery = images;
  }

  closeCallery(shoudlClose: boolean): void {
    this.semaphores.galleryOpened = false;
  }

  attachPins(): void {

    const icon = L.icon({
      iconUrl: 'https://w7.pngwing.com/pngs/567/857/png-transparent-red-and-gray-lever-marker-pen-computer-icons-location-place-tag-s-angle-sphere-map.png',
      iconSize: [30, 30],
      iconAnchor: [0, 0],
      popupAnchor: [20, 0]
    });

    if (this.places.length) {
      for (let place of this.places) {
        L.marker([place.location.latitude, place.location.longitude], {icon: icon}).addTo(this.map)
          .bindPopup(place.name)
          .openPopup()
      }
    }
  }


}
