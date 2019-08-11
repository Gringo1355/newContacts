import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWiewComponent } from './user-wiew.component';

describe('UserWiewComponent', () => {
  let component: UserWiewComponent;
  let fixture: ComponentFixture<UserWiewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWiewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
