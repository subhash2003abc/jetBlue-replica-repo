import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodycontent4Component } from './bodycontent4.component';

describe('Bodycontent4Component', () => {
  let component: Bodycontent4Component;
  let fixture: ComponentFixture<Bodycontent4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bodycontent4Component]
    });
    fixture = TestBed.createComponent(Bodycontent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
