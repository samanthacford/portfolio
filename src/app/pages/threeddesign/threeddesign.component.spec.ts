import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeddesignComponent } from './threeddesign.component';

describe('ThreeddesignComponent', () => {
  let component: ThreeddesignComponent;
  let fixture: ComponentFixture<ThreeddesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeddesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeddesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
