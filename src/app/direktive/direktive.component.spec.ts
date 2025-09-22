import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirektiveComponent } from './direktive.component';

describe('DirektiveComponent', () => {
  let component: DirektiveComponent;
  let fixture: ComponentFixture<DirektiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirektiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirektiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
