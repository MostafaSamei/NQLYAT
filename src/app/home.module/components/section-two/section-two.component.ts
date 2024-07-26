import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SecArrowComponent } from '../../../shared/components/sec-arrow/sec-arrow.component';

@Component({
  selector: 'app-section-two',
  standalone: true,
  imports: [CarouselModule, SecArrowComponent],
  templateUrl: './section-two.component.html',
  styleUrl: './section-two.component.scss',
})
export class SectionTwoComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
}
