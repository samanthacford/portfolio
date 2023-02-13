import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-element',
  templateUrl: './grid-element.component.html',
  styleUrls: ['./grid-element.component.css']
})
export class GridElementComponent {
  // inputs for the title of the project, the src of the image and the description of the project
    @Input() gameTitle: string;
    @Input() imageSRC: string;
    @Input() gameDesc: string;
}
