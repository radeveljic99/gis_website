import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  longitude: number = 42.7087;
  latitude: number = 19.3744;
  map: any;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([this.longitude, this.latitude], 8.5);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // ading custom marker icon

    // const icon = L.icon({
    //   iconUrl: 'assets/img/marker.png',
    //   iconSize: [25, 25],
    //   iconAnchor: [25, 25],
    //   popupAnchor: [-3, -76]
    // });

    this.map.on('click', this.onMapClick);

    // L.marker([51.5, -0.09], {icon: greenIcon}).addTo(this.map)
    // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    // .openPopup();

    // L.marker([51.508, -0.09], {icon: greenIcon}).addTo(this.map)
    // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    // .openPopup();
  }

  onMapClick = (event: any) => {
    window.alert("You clicked the map at " + event.latlng);
  }


}
