import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipiComponent } from './recipi.component';

describe('RecipiComponent', () => {
  let component: RecipiComponent;
  let fixture: ComponentFixture<RecipiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
