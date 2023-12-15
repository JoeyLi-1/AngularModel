import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-standalone',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="corp-card-actions">
      <p></p>
    </div>
  `
})
export class CardStandaloneComponent {

}