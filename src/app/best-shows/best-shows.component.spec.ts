import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestShowsComponent } from './best-shows.component';

describe('BestShowsComponent', () => {
  let component: BestShowsComponent;
  let fixture: ComponentFixture<BestShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
