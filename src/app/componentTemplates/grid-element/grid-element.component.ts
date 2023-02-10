import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-element',
  templateUrl: './grid-element.component.html',
  styleUrls: ['./grid-element.component.css']
})
export class GridElementComponent {
    @Input() gameTitle: string;
    @Input() imageSRC: string;
    @Input() gameDesc: string;
}
