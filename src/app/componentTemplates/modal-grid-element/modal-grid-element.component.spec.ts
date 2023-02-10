import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGridElementComponent } from './modal-grid-element.component';

describe('ModalGridElementComponent', () => {
  let component: ModalGridElementComponent;
  let fixture: ComponentFixture<ModalGridElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGridElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGridElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
