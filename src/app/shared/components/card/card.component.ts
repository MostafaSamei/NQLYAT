import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() image: string = '';
  @Input() type: string = '';
  @Input() icon: string = '';
  @Input() discription: string = '';
}
