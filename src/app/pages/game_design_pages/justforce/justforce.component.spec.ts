import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustforceComponent } from './justforce.component';

describe('JustforceComponent', () => {
  let component: JustforceComponent;
  let fixture: ComponentFixture<JustforceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustforceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
