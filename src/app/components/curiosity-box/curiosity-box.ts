import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curiosity-box',
  imports: [],
  templateUrl: './curiosity-box.html',
  styleUrl: './curiosity-box.scss',
})
export class CuriosityBox {
  @Input() title: string = '';
  @Input() text: string = '';
}
