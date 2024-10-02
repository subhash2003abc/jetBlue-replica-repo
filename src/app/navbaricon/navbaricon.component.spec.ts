import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbariconComponent } from './navbaricon.component';

describe('NavbariconComponent', () => {
  let component: NavbariconComponent;
  let fixture: ComponentFixture<NavbariconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbariconComponent]
    });
    fixture = TestBed.createComponent(NavbariconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
