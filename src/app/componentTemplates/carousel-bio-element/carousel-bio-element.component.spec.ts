import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBioElementComponent } from './carousel-bio-element.component';

describe('CarouselBioElementComponent', () => {
  let component: CarouselBioElementComponent;
  let fixture: ComponentFixture<CarouselBioElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBioElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBioElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
