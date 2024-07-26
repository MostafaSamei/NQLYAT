import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sec-arrow',
  standalone: true,
  imports: [],
  templateUrl: './sec-arrow.component.html',
  styleUrl: './sec-arrow.component.scss',
})
export class SecArrowComponent {
  @Input() color: string = '';
  ngOnInit() {
    console.log(this.color);
  }
}
