import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakOutComponent } from './break-out.component';

describe('BreakOutComponent', () => {
  let component: BreakOutComponent;
  let fixture: ComponentFixture<BreakOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
