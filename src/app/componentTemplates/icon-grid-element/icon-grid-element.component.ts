import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-icon-grid-element',
  templateUrl: './icon-grid-element.component.html',
  styleUrls: ['./icon-grid-element.component.css']
})
export class IconGridElementComponent {
  // inputs for title of the element, the icon src and the flavor text
  @Input() title: string;
  @Input() iconSRC: string;
  @Input() desc: string;
}
