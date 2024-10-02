import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodycontent3Component } from './bodycontent3.component';

describe('Bodycontent3Component', () => {
  let component: Bodycontent3Component;
  let fixture: ComponentFixture<Bodycontent3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bodycontent3Component]
    });
    fixture = TestBed.createComponent(Bodycontent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
