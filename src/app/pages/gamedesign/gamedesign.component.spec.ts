import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamedesignComponent } from './gamedesign.component';

describe('GamedesignComponent', () => {
  let component: GamedesignComponent;
  let fixture: ComponentFixture<GamedesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamedesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
