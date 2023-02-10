import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestierComponent } from './restier.component';

describe('RestierComponent', () => {
  let component: RestierComponent;
  let fixture: ComponentFixture<RestierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
