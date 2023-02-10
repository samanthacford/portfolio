import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconGridElementComponent } from './icon-grid-element.component';

describe('IconGridElementComponent', () => {
  let component: IconGridElementComponent;
  let fixture: ComponentFixture<IconGridElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconGridElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconGridElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
