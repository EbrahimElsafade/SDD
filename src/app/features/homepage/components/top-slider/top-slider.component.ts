import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';

@Component({
  selector: 'app-top-slider',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  providers: [TranslateStore],
  templateUrl: './top-slider.component.html',
  styleUrl: './top-slider.component.scss'
})
export class TopSliderComponent {
  visiblePopupId: number | null = null; // Track which popup is visible

  // Data for pulsing items
  pulsingItems = [
    {
      id: 1,
      positionClass: 'top-20 left-5', // Position classes
      title: '1.2m',
      description: 'Active Citizen & Resident',
      image: '/assets/images/using-icon.svg',
      additionalText: 'Using<br>Sharjah Digital App',
    },
    {
      id: 2,
      positionClass: 'top-15 left-15',
      title: '1.2m',
      description: 'Active Citizen & Resident',
      image: '/assets/images/using-icon.svg',
      additionalText: 'Using<br>Sharjah Digital App',
    },
    {
      id: 3,
      positionClass: 'top-10 left-90',
      title: '1.2m',
      description: 'Active Citizen & Resident',
      image: '/assets/images/using-icon.svg',
      additionalText: 'Using<br>Sharjah Digital App',
    },
  ];

  // Toggle popup visibility
  togglePopup(id: number, event: MouseEvent): void {
    event.stopPropagation(); // Prevent event bubbling
    this.visiblePopupId = this.visiblePopupId === id ? null : id; // Toggle popup
  }

  // Close all popups on outside click
  @HostListener('document:click')
  closeAllPopups(): void {
    this.visiblePopupId = null;
  }

  // Prevent click events from propagating outside the popup container
  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
}