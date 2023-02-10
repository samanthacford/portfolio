import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasezeroComponent } from './basezero.component';

describe('BasezeroComponent', () => {
  let component: BasezeroComponent;
  let fixture: ComponentFixture<BasezeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasezeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasezeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
