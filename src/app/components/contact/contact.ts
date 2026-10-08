import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { ContactService } from '../../services/contact';
import { AnalyticsService } from '../../services/analytics';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  isLoading = false;
  successMessage = '';
  errorMessage = '';

  contactForm;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private analytics: AnalyticsService
  ) {

    this.contactForm = this.fb.group({
      name: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      message: [
        '',
        Validators.required
      ]
    });

  }

  onSubmit(): void {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.contactService
      .sendContact(this.contactForm.value)
      .subscribe({

        next: () => {

          this.isLoading = false;

          this.successMessage =
            'Thank you. Your message was sent successfully.';

          this.analytics.pushEvent({
            event: 'form_success',
            form_name: 'contact'
          });

          this.contactForm.reset();

        },

        error: () => {

          this.isLoading = false;

          this.errorMessage =
            'Something went wrong. Please try again.';

        }

      });

  }

}