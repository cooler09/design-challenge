import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwayscreativeComponent } from './alwayscreative.component';

describe('AlwayscreativeComponent', () => {
  let component: AlwayscreativeComponent;
  let fixture: ComponentFixture<AlwayscreativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlwayscreativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlwayscreativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
