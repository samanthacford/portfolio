import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-carousel-bio-element',
  templateUrl: './carousel-bio-element.component.html',
  styleUrls: ['./carousel-bio-element.component.css']
})
export class CarouselBioElementComponent {
  @Input() gameTitle: string;
  @Input() gameRole: string;
  @Input() gameDesc: string;
  @Input() destination: string;
}
