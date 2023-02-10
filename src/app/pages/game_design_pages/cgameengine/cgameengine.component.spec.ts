import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgameengineComponent } from './cgameengine.component';

describe('CgameengineComponent', () => {
  let component: CgameengineComponent;
  let fixture: ComponentFixture<CgameengineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgameengineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CgameengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
