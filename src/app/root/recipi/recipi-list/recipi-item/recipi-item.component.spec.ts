import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipiItemComponent } from './recipi-item.component';

describe('RecipiItemComponent', () => {
  let component: RecipiItemComponent;
  let fixture: ComponentFixture<RecipiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
