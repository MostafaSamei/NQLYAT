import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ordered-card',
  standalone: true,
  imports: [],
  templateUrl: './ordered-card.component.html',
  styleUrl: './ordered-card.component.scss',
})
export class OrderedCardComponent {
  @Input() order: number = 0;
  @Input() imgSrc: string = '';
  @Input() description: string = '';
}
