import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Place } from '../../models/place.model';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() place: Place;
  @Output() galleryEmmiter = new EventEmitter<Image []>();

  ngOnInit(): void {

  }

  openGallery(): void {
    this.galleryEmmiter.emit(this.place.images);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
