import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondComponent } from './respond.component';

describe('RespondComponent', () => {
  let component: RespondComponent;
  let fixture: ComponentFixture<RespondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RespondComponent]
    });
    fixture = TestBed.createComponent(RespondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
