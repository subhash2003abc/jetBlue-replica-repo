import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodycontent2Component } from './bodycontent2.component';

describe('Bodycontent2Component', () => {
  let component: Bodycontent2Component;
  let fixture: ComponentFixture<Bodycontent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bodycontent2Component]
    });
    fixture = TestBed.createComponent(Bodycontent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
