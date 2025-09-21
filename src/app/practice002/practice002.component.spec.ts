import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice002Component } from './practice002.component';

describe('Practice002Component', () => {
  let component: Practice002Component;
  let fixture: ComponentFixture<Practice002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice002Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
