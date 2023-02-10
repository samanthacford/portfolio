import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ud4demoComponent } from './ud4demo.component';

describe('Ud4demoComponent', () => {
  let component: Ud4demoComponent;
  let fixture: ComponentFixture<Ud4demoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ud4demoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ud4demoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
