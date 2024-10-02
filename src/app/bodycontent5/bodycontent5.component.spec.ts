import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodycontent5Component } from './bodycontent5.component';

describe('Bodycontent5Component', () => {
  let component: Bodycontent5Component;
  let fixture: ComponentFixture<Bodycontent5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bodycontent5Component]
    });
    fixture = TestBed.createComponent(Bodycontent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
