import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tags2Component } from './tags2.component';

describe('Tags2Component', () => {
  let component: Tags2Component;
  let fixture: ComponentFixture<Tags2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tags2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tags2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
