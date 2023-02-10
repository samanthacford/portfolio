import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbornerunComponent } from './airbornerun.component';

describe('AirbornerunComponent', () => {
  let component: AirbornerunComponent;
  let fixture: ComponentFixture<AirbornerunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirbornerunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirbornerunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
