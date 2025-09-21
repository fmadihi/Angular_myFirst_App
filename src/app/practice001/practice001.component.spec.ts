import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice001Component } from './practice001.component';

describe('Practice001Component', () => {
  let component: Practice001Component;
  let fixture: ComponentFixture<Practice001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice001Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
