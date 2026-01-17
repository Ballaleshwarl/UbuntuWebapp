import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitreComponent } from './mitre.component';

describe('MitreComponent', () => {
  let component: MitreComponent;
  let fixture: ComponentFixture<MitreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MitreComponent]
    });
    fixture = TestBed.createComponent(MitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
