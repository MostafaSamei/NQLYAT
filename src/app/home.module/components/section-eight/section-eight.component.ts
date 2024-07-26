import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-section-eight',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './section-eight.component.html',
  styleUrl: './section-eight.component.scss',
})
export class SectionEightComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm = this.fb.group({
      pickupLocation: ['', Validators.required],
      pickupDate: ['', [Validators.required]],
      deliveryLocation: ['', [Validators.required]],
      deliveryDate: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      loadCategory: ['', [Validators.required]],
      companyName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      firstNumber: [
        '',
        [Validators.required, Validators.pattern('^01[0-2,5]{1}[0-9]{8}$')],
      ],
      secondNumber: ['', [Validators.pattern('^01[0-2,5]{1}[0-9]{8}$')]],
    });
  }
  onSubmit() {}
}
