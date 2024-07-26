import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { SecArrowComponent } from '../../../shared/components/sec-arrow/sec-arrow.component';

@Component({
  selector: 'app-section-three',
  standalone: true,
  imports: [CardComponent, SecArrowComponent],
  templateUrl: './section-three.component.html',
  styleUrl: './section-three.component.scss',
})
export class SectionThreeComponent {}
