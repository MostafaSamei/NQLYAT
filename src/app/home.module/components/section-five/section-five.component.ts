import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { SecArrowComponent } from '../../../shared/components/sec-arrow/sec-arrow.component';

@Component({
  selector: 'app-section-five',
  standalone: true,
  imports: [CardComponent, SecArrowComponent],
  templateUrl: './section-five.component.html',
  styleUrl: './section-five.component.scss',
})
export class SectionFiveComponent {}
