import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-grid-element',
  templateUrl: './modal-grid-element.component.html',
  styleUrls: ['./modal-grid-element.component.css']
})
export class ModalGridElementComponent {
  @Input() modelTitle: string;
  @Input() imageSRC: string;
}
