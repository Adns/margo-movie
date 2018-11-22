import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowFullComponent} from './show-full.component';

describe('ShowFullComponent', () => {
  let component: ShowFullComponent;
  let fixture: ComponentFixture<ShowFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowFullComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
