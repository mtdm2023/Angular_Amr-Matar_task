import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperPannerComponent } from './upper-panner.component';

describe('UpperPannerComponent', () => {
  let component: UpperPannerComponent;
  let fixture: ComponentFixture<UpperPannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpperPannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpperPannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
