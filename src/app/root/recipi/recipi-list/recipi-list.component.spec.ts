import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipiListComponent } from './recipi-list.component';

describe('RecipiListComponent', () => {
  let component: RecipiListComponent;
  let fixture: ComponentFixture<RecipiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
