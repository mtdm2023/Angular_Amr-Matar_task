import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphListComponent } from './graph-list.component';

describe('GraphListComponent', () => {
  let component: GraphListComponent;
  let fixture: ComponentFixture<GraphListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
