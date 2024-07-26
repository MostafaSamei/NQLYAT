import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testemonial',
  standalone: true,
  imports: [],
  templateUrl: './testemonial.component.html',
  styleUrl: './testemonial.component.scss',
})
export class TestemonialComponent {
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
}
