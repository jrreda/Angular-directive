import { Directive } from '@angular/core';

@Directive({
  selector: 'a[AppSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective is Active');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?')

    if (wantsToLeave) return

    event.preventDefault()
  }
}
