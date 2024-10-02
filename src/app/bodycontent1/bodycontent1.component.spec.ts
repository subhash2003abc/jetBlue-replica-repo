import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodycontent1Component } from './bodycontent1.component';

describe('Bodycontent1Component', () => {
  let component: Bodycontent1Component;
  let fixture: ComponentFixture<Bodycontent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bodycontent1Component]
    });
    fixture = TestBed.createComponent(Bodycontent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
