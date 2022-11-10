import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetttingComponent } from './settting.component';

describe('SetttingComponent', () => {
  let component: SetttingComponent;
  let fixture: ComponentFixture<SetttingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetttingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetttingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
