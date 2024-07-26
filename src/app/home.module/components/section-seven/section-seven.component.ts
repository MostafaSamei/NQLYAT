import { Component, ViewChild } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TestemonialComponent } from '../../../shared/components/testemonial/testemonial.component';

@Component({
  selector: 'app-section-seven',
  standalone: true,
  imports: [CarouselModule, TestemonialComponent],
  templateUrl: './section-seven.component.html',
  styleUrl: './section-seven.component.scss',
})
export class SectionSevenComponent {
  @ViewChild('testimonials') testimonials: any;

  testimonialsOptions: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  };
}
