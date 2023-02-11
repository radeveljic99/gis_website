import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Place } from '../../models/place.model';
import { Image } from '../../models/image.model';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() place: Place;
  @Output() galleryEmmiter = new EventEmitter<Image []>();
  @Output() showPlaceLocation = new EventEmitter<Place>();

  ngOnInit(): void {

  }

  openGallery(): void {
    this.galleryEmmiter.emit(this.place.images);
  }

  showLocation(): void {
    this.showPlaceLocation.emit(this.place);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
