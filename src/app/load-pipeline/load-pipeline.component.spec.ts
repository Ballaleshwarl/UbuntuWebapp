import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPipelineComponent } from './load-pipeline.component';

describe('LoadPipelineComponent', () => {
  let component: LoadPipelineComponent;
  let fixture: ComponentFixture<LoadPipelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadPipelineComponent]
    });
    fixture = TestBed.createComponent(LoadPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
