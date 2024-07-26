import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecArrowComponent } from './sec-arrow.component';

describe('SecArrowComponent', () => {
  let component: SecArrowComponent;
  let fixture: ComponentFixture<SecArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecArrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
