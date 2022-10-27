import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdlayoutComponent } from './adlayout.component';

describe('AdlayoutComponent', () => {
  let component: AdlayoutComponent;
  let fixture: ComponentFixture<AdlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
