import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from '../../models/image.model';
import Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {
  @Input() images: Image [];

  @Output() closeGalleryEmmiter = new EventEmitter<boolean>();

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      modules: [Pagination, Navigation],
      spaceBetween:0,
      speed: 400,
      slidesPerView: 1,
      centeredSlides: false,
      loop: false,
      navigation : {
        nextEl: '.nav-next',
        prevEl: '.nav-prev'
      },
      pagination : {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }

  closeGallery(): void {
    this.closeGalleryEmmiter.emit(true);
  }

}
