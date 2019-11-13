import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button mat-button class="blue" *ngIf="!value"></button>
    <button mat-button class="green" *ngIf="value == 'X'">{{ value }}</button>
    <button mat-button class="purple" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';

}
