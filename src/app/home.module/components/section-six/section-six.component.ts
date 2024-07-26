import { Component } from '@angular/core';
import { OrderedCardComponent } from '../../../shared/components/ordered-card/ordered-card.component';
import { SecArrowComponent } from '../../../shared/components/sec-arrow/sec-arrow.component';

@Component({
  selector: 'app-section-six',
  standalone: true,
  imports: [OrderedCardComponent, SecArrowComponent],
  templateUrl: './section-six.component.html',
  styleUrl: './section-six.component.scss',
})
export class SectionSixComponent {}
